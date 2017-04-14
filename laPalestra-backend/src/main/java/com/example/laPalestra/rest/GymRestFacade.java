package com.example.laPalestra.rest;

import com.example.laPalestra.entity.Gym;
import com.example.laPalestra.service.api.GymService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by anatol on 13.4.17.
 */
@RestController
@RequestMapping(value = "/gym")
@Validated
public class GymRestFacade {
    @Autowired
    private GymService gymService;


    @GetMapping("/all")
    public List<Gym> getAll() {
        return gymService.findAll();
    }
}
