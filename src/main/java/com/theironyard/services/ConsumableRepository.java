package com.theironyard.services;

import com.theironyard.entities.Consumable;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by zach on 11/19/15.
 */
public interface ConsumableRepository extends CrudRepository<Consumable, Integer> {
}
