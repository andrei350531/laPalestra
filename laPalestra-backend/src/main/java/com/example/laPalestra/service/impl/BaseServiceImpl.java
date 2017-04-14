package com.example.laPalestra.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import java.sql.PreparedStatement;

/**
 * Created by anatol on 13.4.17.
 */
public abstract class BaseServiceImpl {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    public PreparedStatementCreator getPsc(String sql, Object[] args) {
        return connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"id"});
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i + 1, args[i]);
            }
            return ps;
        };
    }

    public Long update(String sql, Object[] args) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        getJdbcTemplate().update(getPsc(sql, args), keyHolder);
        return keyHolder.getKey().longValue();
    }
}
