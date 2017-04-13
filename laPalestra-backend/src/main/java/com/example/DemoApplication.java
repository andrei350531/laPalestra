package com.example;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;


import javax.sql.DataSource;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Autowired(required = true)
    private Environment environment;


    @Bean
    public DataSource dataSource() {
        String dbUrl = environment.getProperty("jdbc.endpoint");

        // Apache pooling datasource...
        BasicDataSource datasource = new BasicDataSource();

        datasource.setRemoveAbandoned(true);
        datasource.setDriverClassName(environment.getProperty("jdbc.driverClassName"));

        datasource.setUrl(dbUrl);

        // when not using @Transactional annotation commit automatically operations...
        datasource.setDefaultAutoCommit(true);

        datasource.setInitialSize(new Integer(environment.getProperty("jdbc.apache.initialPoolSize")));
        datasource.setMaxActive(new Integer(environment.getProperty("jdbc.apache.maxActiveConnections")));

        // maximum 12 idle connections... minimun 0 to ensure the connection eviction always runs...
        datasource.setMaxIdle(12);
        datasource.setMinIdle(0);

        // every X minutes cleanup is done...IMPORTANT: The process of eviction is synchronized on the entire connection pool!! eviction process locks!!
        datasource.setTimeBetweenEvictionRunsMillis(5 * 60 * 1000);
        // if a connection sits still for X minutes, it is considered idle...
        datasource.setMinEvictableIdleTimeMillis(1 * 60 * 1000);
        // let 4 evictions check the whole pool...
        datasource.setNumTestsPerEvictionRun(datasource.getMaxIdle() / 4);

        // validation query will wait 5 secs maximum...be careful!... object evictor will check the connections and lock the entire pool while checking!!
        datasource.setTestWhileIdle(true);
        datasource.setTestOnReturn(false);
        datasource.setTestOnBorrow(false);
        datasource.setValidationQuery("SELECT 1");
        datasource.setValidationQueryTimeout(1000);

        // will wait 5 secs for a database connection...
        datasource.setMaxWait(5000);
        // taking care of abandoned connections apply to poorly written applications...
        datasource.setRemoveAbandoned(false);

        return datasource;
    }

    @Bean
    public JdbcTemplate setDataSource(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    public PlatformTransactionManager txManager(DataSource dataSource )
    {
        return new DataSourceTransactionManager( dataSource );
    }

}