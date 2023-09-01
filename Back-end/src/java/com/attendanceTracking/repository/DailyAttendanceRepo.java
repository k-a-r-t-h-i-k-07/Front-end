package com.attendanceTracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendanceTracking.model.DailyAttendance;


public interface DailyAttendanceRepo extends JpaRepository<DailyAttendance, Integer> {

}
