package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by zach on 11/19/15.
 */
@Entity
@Table(name = "ratings")
public class Rating {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @ManyToOne
    public Consumable consumable;

    @Column(nullable = false)
    public int value;
}
