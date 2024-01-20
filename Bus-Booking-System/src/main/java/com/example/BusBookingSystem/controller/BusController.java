package com.example.BusBookingSystem.controller;

import com.example.BusBookingSystem.dto.BusDto;
import com.example.BusBookingSystem.service.BusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/bus")
public class BusController {
    private BusService busService;

    @GetMapping
    public ResponseEntity<List<BusDto>> get(){
        List<BusDto> getList= busService.getAll();
        return new ResponseEntity<>(getList, HttpStatus.OK);
    }

    @GetMapping(params = {"fromLocations", "toLocations"})
    public ResponseEntity<List<BusDto>> getLocation(@RequestParam String fromLocations, @RequestParam String toLocations) {
        List<BusDto> get = busService.getByLocation(fromLocations, toLocations);
        return new ResponseEntity<>(get, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BusDto> create(@RequestBody BusDto busDto){
        BusDto created=busService.create(busDto);
        return new ResponseEntity<>(created,HttpStatus.CREATED);
    }

    @GetMapping("{id}")
        public ResponseEntity<BusDto> getId(@PathVariable ("id") Long id){
        BusDto busDto=busService.getById(id);
        return new ResponseEntity<>(busDto,HttpStatus.OK);
    }
}
