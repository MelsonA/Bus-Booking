package com.example.BusBookingSystem.service.impl;

import com.example.BusBookingSystem.dto.RouteDto;
import com.example.BusBookingSystem.entity.Route;
import com.example.BusBookingSystem.mapper.RouteMapper;
import com.example.BusBookingSystem.repository.RouteRepository;
import com.example.BusBookingSystem.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RouteServiceImpl implements RouteService {

    private RouteRepository routeRepository;
    @Override
    public RouteDto getRouteById(Long id) {
        Route route =routeRepository.findById(id).get();
        RouteDto getRoute = RouteMapper.mapToRouteDto(route);
        return getRoute;
    }

    @Override
    public RouteDto getRouteByLocation(String fromLocation, String toLocation) {
        Route route=routeRepository.findByFromLocationAndToLocation( fromLocation,  toLocation);
        RouteDto routeDto=RouteMapper.mapToRouteDto(route);
        return routeDto;
    }

    public RouteDto createRoute(RouteDto routeDto){
        Route route=RouteMapper.mapToRoute(routeDto);
        Route routes=routeRepository.save(route);
        RouteDto routeDto1=RouteMapper.mapToRouteDto(routes);
        return routeDto1;
    }

    @Override
    public List<RouteDto> getAllRoute() {
        List<Route> routes=routeRepository.findAll();
        List<RouteDto> routeDtoList=routes.stream().map(route -> RouteMapper.mapToRouteDto(route)).collect(Collectors.toList());
        return routeDtoList;
    }
}
