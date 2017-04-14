package com.example.laPalestra.service.impl;

import com.example.laPalestra.entity.Service;
import com.example.laPalestra.service.api.OccupationService;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.example.laPalestra.utils.Constants.JdbcStrings.*;
import static com.example.laPalestra.utils.EntityRowMapper.SERVICE_ROW_MAPPER;

/**
 * Created by anatol on 13.4.17.
 */
@org.springframework.stereotype.Service
@Transactional
public class OccupationServiceImpl extends BaseServiceImpl implements OccupationService {
    @Override
    public Service getById(Long id) {
        String sql = SELECT + "Service" + WITH_ID;
        Object[] args = {id};
        return getJdbcTemplate().queryForObject(sql, args, SERVICE_ROW_MAPPER);
    }

    @Override
    public Service save(Service dto) {
        String sql;
        Object[] args;
        if(dto.getId() == null) {
            sql = INSERT_INTO + SERVICE_TABLE + "VALUES (?,?)";
            args = new Object[]{dto.getDescription(), dto.getPrice()};
        } else {
            sql = UPDATE_SERVICE;
            args = new Object[]{dto.getDescription(), dto.getPrice(), dto.getId()};
        }
        Long id = update(sql, args);
        dto.setId(id);
        return dto;
    }


    @Override
    public void delete(Long id) {
        String sql = DELETE + "Service" + WITH_ID;
        Object[] args = {id};
        getJdbcTemplate().update(sql, args);

    }

    @Override
    public List<Service> findAll() {

        String sql = SELECT + "Service";
        return getJdbcTemplate().query(sql, SERVICE_ROW_MAPPER);
    }
}
