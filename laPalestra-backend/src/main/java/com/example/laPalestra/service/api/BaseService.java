package com.example.laPalestra.service.api;

import com.example.laPalestra.entity.BaseEntity;

import java.util.List;

/**
 * Created by anatol on 13.4.17.
 */
public interface BaseService<D extends BaseEntity> {
    D getById(Long id);

    D save(D dto);

    default void delete(D dto) {
        delete(dto.getId());
    }

    void delete(Long id);

    List<D> findAll();
}
