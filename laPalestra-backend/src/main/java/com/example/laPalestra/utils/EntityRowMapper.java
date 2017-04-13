package com.example.laPalestra.utils;

import com.example.laPalestra.entity.Gym;
import com.example.laPalestra.entity.Service;
import com.example.laPalestra.entity.User;
import org.springframework.jdbc.core.RowMapper;

/**
 * Created by anatol on 13.4.17.
 */
public class EntityRowMapper {

    public static RowMapper<User> USER_ROW_MAPPER = (rs, rowNum) -> {
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setPhone(rs.getString("phone"));
        return user;
    };

    public static RowMapper<Gym> GYM_ROW_MAPPER = (rs, rowNum) -> {
        Gym gym = new Gym();
        gym.setId(rs.getLong("id"));
        gym.setMaxSpaces(rs.getInt("maxSpaces"));
        gym.setAddress(rs.getString("address"));
        return gym;
    };

    public static RowMapper<Service> SERVICE_ROW_MAPPER = (rs, rowNum) -> {
        Service service = new Service();
        service.setId(rs.getLong("id"));
        service.setDescription(rs.getString("comment"));
        service.setPrice(rs.getDouble("price"));

        return service;
    };
}
