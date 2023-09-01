package com.attendanceTracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendanceTracking.model.MonthlyRtoDates;

public interface MonthlyRtoRepo extends JpaRepository<MonthlyRtoDates, Integer> {

}
