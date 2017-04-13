package com.example.laPalestra.entity;

/**
 * Created by anatol on 13.4.17.
 */

public class Service extends BaseEntity {

    private String description;
    private Double price;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
