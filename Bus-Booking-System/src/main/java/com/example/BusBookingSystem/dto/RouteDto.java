package com.example.BusBookingSystem.dto;

import com.example.BusBookingSystem.entity.Bus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RouteDto {
    private Long id;
    private String fromLocation;
    private String toLocation;
    private String date;
}
