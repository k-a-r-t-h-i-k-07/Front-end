package com.attendanceTracking.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.attendanceTracking.model.Associate;



public interface AttendanceRepo extends JpaRepository<Associate, Integer> {

	

}
