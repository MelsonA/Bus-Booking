package com.example.BusBookingSystem.mapper;

import com.example.BusBookingSystem.dto.RouteDto;
import com.example.BusBookingSystem.entity.Route;

public class RouteMapper {

    public static RouteDto mapToRouteDto(Route route){
        RouteDto routeDto =new RouteDto(route.getId(), route.getFromLocation(), route.getToLocation(),
                route.getDate());
        return routeDto;
    }
    public static Route mapToRoute(RouteDto routeDto){
        Route route =new Route(routeDto.getId(), routeDto.getFromLocation(), routeDto.getToLocation(),
                routeDto.getDate());
        return route;
    }
}
