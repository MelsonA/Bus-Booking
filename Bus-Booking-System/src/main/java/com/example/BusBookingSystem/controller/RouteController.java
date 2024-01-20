package com.example.BusBookingSystem.controller;

import com.example.BusBookingSystem.dto.RouteDto;
import com.example.BusBookingSystem.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/route")
@AllArgsConstructor
public class RouteController {

    private RouteService routeService;

    @GetMapping("{id}")
    public ResponseEntity<RouteDto> getRoute(@PathVariable Long id){
        RouteDto getRoute=routeService.getRouteById(id);
        return new ResponseEntity<>(getRoute, HttpStatus.OK);
    }

    @GetMapping(params = {"fromLocation", "toLocation"})
    public ResponseEntity<RouteDto> getLocation(@RequestParam String fromLocation, @RequestParam String toLocation){
        RouteDto routeDto = routeService.getRouteByLocation(fromLocation, toLocation);
        return new ResponseEntity<>(routeDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RouteDto> createRoute(@RequestBody RouteDto routeDto){
        RouteDto routeDto1=routeService.createRoute(routeDto);
        return new ResponseEntity<>(routeDto1,HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity <List<RouteDto>> getAllRoutes(){
        List<RouteDto> allRoute=routeService.getAllRoute();
        return new ResponseEntity<>(allRoute, HttpStatus.OK);
    }
}
