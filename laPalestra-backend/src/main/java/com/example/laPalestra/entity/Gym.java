package com.example.laPalestra.entity;

/**
 * Created by anatol on 13.4.17.
 */

public class Gym extends BaseEntity {

    private String name;
    private String address;
    private Integer maxSpaces;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getMaxSpaces() {
        return maxSpaces;
    }

    public void setMaxSpaces(Integer maxSpaces) {
        this.maxSpaces = maxSpaces;
    }
}
