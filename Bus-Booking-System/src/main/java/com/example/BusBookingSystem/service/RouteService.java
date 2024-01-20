package com.example.BusBookingSystem.service;

import com.example.BusBookingSystem.dto.RouteDto;
import com.example.BusBookingSystem.entity.Route;

import java.util.List;

public interface RouteService {

    RouteDto getRouteById(Long id);

    RouteDto getRouteByLocation(String fromLocation, String toLocation);

    RouteDto createRoute(RouteDto routeDto);

    List<RouteDto> getAllRoute();

}
