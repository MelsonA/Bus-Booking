package com.example.BusBookingSystem.controller;

import com.example.BusBookingSystem.dto.PassengerDto;
import com.example.BusBookingSystem.service.PassengerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/passenger")
public class PassengerController {
    private PassengerService passengerService;

    @PostMapping
    public ResponseEntity<PassengerDto> create(@RequestBody PassengerDto passengerDto){
        PassengerDto created=passengerService.create(passengerDto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PassengerDto> getId(@PathVariable("id") Long id){
        PassengerDto get=passengerService.getById(id);
        return new ResponseEntity<>(get,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<PassengerDto> update(@RequestBody PassengerDto passengerDto,@PathVariable("id") Long id){
        passengerDto.setId(id);
        PassengerDto updated=passengerService.update(passengerDto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id){
        passengerService.delete(id);
        return new ResponseEntity<>("Deleted",HttpStatus.NO_CONTENT);
    }
}
