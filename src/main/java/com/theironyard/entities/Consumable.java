package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by zach on 11/19/15.
 */
@Entity
@Table(name = "consumables")
public class Consumable {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    int id;

    @Column(nullable = false)
    public String name;

    @Column(nullable = false)
    public String description;

    @Column(nullable = false)
    public String vendor;

    @Column(nullable = false)
    public String imageLocation;
}