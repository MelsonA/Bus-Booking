package com.example.BusBookingSystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Bus")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String busName;
    @Column(nullable = false)
    private String busNumber;
    @Column(nullable = false)
    private String fromLocations;
    @Column(nullable = false)
    private String toLocations;
    @Column(nullable = false)
    private String departureTime;
    @Column(nullable = false)
    private String ticketPrice;

    @ManyToOne
    private Route route;




    public Bus(Long id, String busName, String busNumber, String fromLocations, String toLocations, String ticketPrice, String departureTime) {
        this.id=id;
        this.busName=busName;
        this.busNumber=busNumber;
        this.fromLocations=fromLocations;
        this.toLocations=toLocations;
        this.ticketPrice=ticketPrice;
        this.departureTime=departureTime;
    }
}
