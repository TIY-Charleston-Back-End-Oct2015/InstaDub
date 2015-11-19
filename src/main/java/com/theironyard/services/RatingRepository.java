package com.theironyard.services;

import com.theironyard.entities.Rating;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by zach on 11/19/15.
 */
public interface RatingRepository extends CrudRepository<Rating, Integer> {
}
