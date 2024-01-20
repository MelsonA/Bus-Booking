package com.example.BusBookingSystem.repository;

import com.example.BusBookingSystem.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RouteRepository extends JpaRepository<Route, Long> {

    Route findByFromLocationAndToLocation(String fromLocation, String toLocation);
}

