package com.example.BusBookingSystem.service.impl;

import com.example.BusBookingSystem.dto.BusDto;
import com.example.BusBookingSystem.entity.Bus;
import com.example.BusBookingSystem.entity.Route;
import com.example.BusBookingSystem.mapper.BusMapper;
import com.example.BusBookingSystem.repository.BusRepository;
import com.example.BusBookingSystem.repository.RouteRepository;
import com.example.BusBookingSystem.service.BusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BusServiceImpl implements BusService {
    private BusRepository busRepository;
    private RouteRepository routeRepository;
    @Override
    public List<BusDto> getAll() {
        List<Bus> buses=busRepository.findAll();
        List<BusDto> busDtoList=buses.stream().map(bus-> BusMapper.mapToBusDto(bus)).collect(Collectors.toList());
        return busDtoList;
    }

    @Override
    public List<BusDto> getByLocation(String fromLocation, String toLocation) {
       Route route= routeRepository.findByFromLocationAndToLocation(fromLocation, toLocation);
       if(route !=null){
           List<Bus> buses=route.getBus();
           List<BusDto> busDtoList=buses.stream()
                   .filter(bus -> bus.getFromLocations().equals(fromLocation) && bus.getToLocations().equals(toLocation))
                   .map(BusMapper::mapToBusDto)
                   .collect(Collectors.toList());
           return busDtoList;
       }
        return Collections.emptyList();

    }

    @Override
    public BusDto create(BusDto busDto) {
        Bus bus=BusMapper.mapToBus(busDto);
        Bus create=busRepository.save(bus);
        BusDto created=BusMapper.mapToBusDto(create);
        return created;
    }

    @Override
    public BusDto getById(Long id) {
        Bus bus=busRepository.findById(id).get();
        BusDto busDto=BusMapper.mapToBusDto(bus);
        return busDto;
    }
}
