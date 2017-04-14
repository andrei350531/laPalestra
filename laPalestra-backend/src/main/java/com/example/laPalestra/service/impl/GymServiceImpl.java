package com.example.laPalestra.service.impl;

import com.example.laPalestra.entity.Gym;
import com.example.laPalestra.service.api.GymService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.example.laPalestra.utils.Constants.JdbcStrings.*;
import static com.example.laPalestra.utils.EntityRowMapper.GYM_ROW_MAPPER;

/**
 * Created by anatol on 13.4.17.
 */
@Service
@Transactional
public class GymServiceImpl extends BaseServiceImpl implements GymService {
    @Override
    public Gym getById(Long id) {
        String sql = SELECT + "Gym" + WITH_ID;
        Object[] args = {id};
        return getJdbcTemplate().queryForObject(sql, args, GYM_ROW_MAPPER);
    }

    @Override
    public Gym save(Gym dto) {
        String sql;
        Object[] args;
        if(dto.getId() == null) {
             sql = INSERT_INTO + GYM_TABLE + "VALUES (?,?)";
             args = new Object[]{dto.getMaxSpaces(), dto.getAddress()};
        } else {
            sql = UPDATE_GYM;
            args = new Object[]{dto.getMaxSpaces(), dto.getAddress(), dto.getId()};

        }
        Long id = update(sql, args);
        dto.setId(id);
        return dto;
    }


    @Override
    public void delete(Long id) {
        String sql = DELETE + "Gym" + WITH_ID;
        Object[] args = {id};
        getJdbcTemplate().update(sql, args);

    }

    @Override
    public List<Gym> findAll() {
        String sql = SELECT + "Gym";
        return getJdbcTemplate().query(sql, GYM_ROW_MAPPER);
    }
}
