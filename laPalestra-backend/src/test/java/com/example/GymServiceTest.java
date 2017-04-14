package com.example;

import com.example.laPalestra.entity.Gym;
import com.example.laPalestra.service.api.GymService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

/**
 * Created by anatol on 13.4.17.
 */
public class GymServiceTest  extends BaseApplicationTest{

    @Autowired
    private GymService gymService;

    @Test
    public void findAllTest() {
        List<Gym> gyms = gymService.findAll();
        assertNotNull(gyms);
        assertFalse(gyms.isEmpty());
    }
}
