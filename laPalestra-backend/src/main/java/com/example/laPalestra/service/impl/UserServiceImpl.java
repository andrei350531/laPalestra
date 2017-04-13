package com.example.laPalestra.service.impl;

import com.example.laPalestra.entity.User;
import com.example.laPalestra.service.api.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.laPalestra.utils.Constants.JdbcStrings.*;
import static com.example.laPalestra.utils.EntityRowMapper.USER_ROW_MAPPER;

/**
 * Created by anatol on 13.4.17.
 */
@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService {
    @Override
    public User getById(Long id) {
        String sql = SELECT + "User" + WITH_ID;
        Object[] args = {id};
        return getJdbcTemplate().queryForObject(sql, args, USER_ROW_MAPPER);
    }

    @Override
    public User save(User dto) {
        String sql;
        Object[] args;
        if (dto.getId() == null) {
            sql = INSERT_INTO + USER_TABLE + "VALUES (?,?,?)";
            args = new Object[]{dto.getFirstName(), dto.getLastName(), dto.getPhone()};
        } else {
            sql = UPDATE_USER;
            args = new Object[]{dto.getFirstName(), dto.getLastName(), dto.getPhone(), dto.getId()};
        }
        Long id = update(sql, args);
        dto.setId(id);
        return dto;
    }

    @Override
    public void delete(Long id) {
        String sql = DELETE + "User" + WITH_ID;
        Object[] args = {id};
        getJdbcTemplate().update(sql, args);

    }

    @Override
    public List<User> findAll() {
        return null;
    }
}
