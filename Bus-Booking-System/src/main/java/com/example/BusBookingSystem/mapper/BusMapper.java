package com.example.BusBookingSystem.mapper;

import com.example.BusBookingSystem.dto.BusDto;
import com.example.BusBookingSystem.entity.Bus;

public class BusMapper {

    public static BusDto mapToBusDto(Bus bus){
        BusDto busDto=new BusDto(bus.getId(), bus.getBusName(),bus.getBusNumber(),bus.getFromLocations(),
                bus.getToLocations(),bus.getTicketPrice(),bus.getDepartureTime());
        return busDto;
    }

    public static Bus mapToBus(BusDto busDto){
        Bus bus=new Bus(busDto.getId(), busDto.getBusName(),busDto.getBusNumber(),busDto.getFromLocations(),
                busDto.getToLocations(),busDto.getTicketPrice(),busDto.getDepartureTime());
        return bus;
    }
}
