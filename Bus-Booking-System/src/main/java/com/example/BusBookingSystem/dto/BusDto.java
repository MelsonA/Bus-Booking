package com.example.BusBookingSystem.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusDto {
    private Long id;
    private String busName;
    private String busNumber;
    private String fromLocations;
    private String toLocations;
    private String departureTime;
    private String ticketPrice;
}
