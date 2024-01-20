package com.example.BusBookingSystem.service;

import com.example.BusBookingSystem.dto.PassengerDto;
import com.example.BusBookingSystem.entity.Passenger;

public interface PassengerService {
    PassengerDto create(PassengerDto passengerDto);
    PassengerDto getById(Long id);
    PassengerDto update(PassengerDto passengerDto);
    void delete(Long id);
}
