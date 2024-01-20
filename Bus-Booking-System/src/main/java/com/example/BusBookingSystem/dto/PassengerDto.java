package com.example.BusBookingSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PassengerDto {
    private Long id;
    private String name;
    private String age;
    private String mobile;
    private String email;
    private String seats;
    private String gender;

}
