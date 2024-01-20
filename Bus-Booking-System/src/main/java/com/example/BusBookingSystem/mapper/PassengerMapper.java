package com.example.BusBookingSystem.mapper;

import com.example.BusBookingSystem.dto.PassengerDto;
import com.example.BusBookingSystem.entity.Passenger;

public class PassengerMapper {
    public static PassengerDto mapToPassengerDto(Passenger passenger){
        PassengerDto passengerDto=new PassengerDto(passenger.getId(), passenger.getName(),
                passenger.getAge(), passenger.getMobile(), passenger.getEmail(), passenger.getSeats(),
                passenger.getGender());
        return passengerDto;
    }

    public static Passenger mapToPassenger(PassengerDto passengerDto){
        Passenger passenger=new Passenger(passengerDto.getId(), passengerDto.getName(),
                passengerDto.getAge(), passengerDto.getMobile(), passengerDto.getEmail(),
                passengerDto.getSeats(), passengerDto.getGender());
        return passenger;
    }
}
