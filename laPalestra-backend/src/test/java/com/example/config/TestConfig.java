package com.example.config;

import com.example.laPalestra.service.api.GymService;
import com.example.laPalestra.service.api.OccupationService;
import com.example.laPalestra.service.api.UserService;
import com.example.laPalestra.service.impl.GymServiceImpl;
import com.example.laPalestra.service.impl.OccupationServiceImpl;
import com.example.laPalestra.service.impl.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.transaction.PlatformTransactionManager;

import javax.inject.Inject;
import javax.sql.DataSource;

/**
 * Created by anatol on 14.4.17.
 */
@Configuration
@PropertySource("classpath:testApplication.properties")
public class TestConfig {

    @Inject
    private Environment environment;

    @Bean
    public DataSource dataSource() {
        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        EmbeddedDatabase db = builder
                .setType(EmbeddedDatabaseType.H2)
                .addScript("createDatabase.sql")
                .addScript("fillDataBase.sql")
                .build();
        return db;
    }

    @Bean
    public JdbcTemplate setDataSource(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    public PlatformTransactionManager txManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean
    public UserService userService() {
        return new UserServiceImpl();
    }

    @Bean
    public GymService gymService() {
        return new GymServiceImpl();
    }

    @Bean
    public OccupationService occupationService() {
        return new OccupationServiceImpl();
    }


}
