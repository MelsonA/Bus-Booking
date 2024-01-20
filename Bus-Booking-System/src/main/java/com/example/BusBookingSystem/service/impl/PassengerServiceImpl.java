package com.example.BusBookingSystem.service.impl;

import com.example.BusBookingSystem.dto.PassengerDto;
import com.example.BusBookingSystem.entity.Passenger;
import com.example.BusBookingSystem.mapper.PassengerMapper;
import com.example.BusBookingSystem.repository.PassengerRepository;
import com.example.BusBookingSystem.service.PassengerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PassengerServiceImpl implements PassengerService {
    private PassengerRepository passengerRepository;

    @Override
    public PassengerDto create(PassengerDto passengerDto) {
        Passenger passenger=PassengerMapper.mapToPassenger(passengerDto);
        Passenger create=passengerRepository.save(passenger);
        PassengerDto created=PassengerMapper.mapToPassengerDto(create);
        return created;
    }

    @Override
    public PassengerDto getById(Long id) {
        Passenger passenger=passengerRepository.findById(id).get();
        PassengerDto passengerDto=PassengerMapper.mapToPassengerDto(passenger);
        return passengerDto;
    }

    @Override
    public PassengerDto update(PassengerDto passengerDto) {
        Passenger passenger=PassengerMapper.mapToPassenger(passengerDto);
        Passenger update=passengerRepository.findById(passenger.getId()).get();
        update.setAge(passenger.getAge());
        update.setName(passenger.getName());
        update.setEmail(passenger.getEmail());
        update.setMobile(passenger.getMobile());
        update.setGender(passenger.getGender());
        update.setSeats(passenger.getSeats());
        Passenger updated=passengerRepository.save(update);
        PassengerDto updatedDto=PassengerMapper.mapToPassengerDto(updated);
        return updatedDto;
    }

    @Override
    public void delete(Long id) {
        Passenger passenger=passengerRepository.findById(id).get();
        passengerRepository.delete(passenger);
    }
}
