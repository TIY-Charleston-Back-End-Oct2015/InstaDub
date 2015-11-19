package com.theironyard.controllers;

import com.theironyard.entities.Consumable;
import com.theironyard.services.ConsumableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

/**
 * Created by zach on 11/19/15.
 */
@RestController
public class InstaDubController {
    @Autowired
    ConsumableRepository consumables;

    @RequestMapping("/beers")
    public List<Consumable> beers() {
        return (List<Consumable>) consumables.findAll();
    }

    @RequestMapping("/add-beer")
    public void addBeer(String name, String description, String vendor, MultipartFile image) throws IOException {
        File f = File.createTempFile("image", image.getOriginalFilename(), new File("public"));
        FileOutputStream fos = new FileOutputStream(f);
        fos.write(image.getBytes());

        Consumable consumable = new Consumable();
        consumable.name = name;
        consumable.description = description;
        consumable.vendor = vendor;
        consumable.imageLocation = f.getName();
        consumables.save(consumable);
    }
}
