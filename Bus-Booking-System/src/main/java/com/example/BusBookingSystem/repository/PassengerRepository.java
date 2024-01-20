package com.example.BusBookingSystem.repository;

import com.example.BusBookingSystem.entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger,Long> {
}
