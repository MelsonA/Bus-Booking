package com.example.BusBookingSystem.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Route")
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String fromLocation;
    @Column(nullable = false)
    private String toLocation;
    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Column(nullable = false)
    private String date;

    @OneToMany(mappedBy = "route")
    private List<Bus> bus;


    public Route(Long id, String fromLocation, String toLocation, String date) {
        this.id=id;
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.date=date;
    }
}
