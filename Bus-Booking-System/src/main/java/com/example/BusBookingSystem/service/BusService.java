package com.example.BusBookingSystem.service;

import com.example.BusBookingSystem.dto.BusDto;

import java.util.List;

public interface BusService {

    List<BusDto> getAll();

    List<BusDto> getByLocation(String fromLocations,String toLocations);

    BusDto create(BusDto busDto);

    BusDto getById(Long id);
}
