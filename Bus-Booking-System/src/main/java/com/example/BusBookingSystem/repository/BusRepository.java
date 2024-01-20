package com.example.BusBookingSystem.repository;

import com.example.BusBookingSystem.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BusRepository extends JpaRepository<Bus,Long> {
    List<Bus> findByFromLocationsAndToLocations(String fromLocations, String toLocations);
}
