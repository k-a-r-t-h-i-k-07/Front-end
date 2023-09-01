package com.attendanceTracking.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendanceTracking.model.DailyAttendance;
import com.attendanceTracking.repository.DailyAttendanceRepo;

@Service
public class DailyAttendanceService {
		
		@Autowired
		DailyAttendanceRepo dRepo;


		public DailyAttendance updateDailyAttendance(DailyAttendance dAttendance) {
			DailyAttendance attend = new DailyAttendance();
			attend.setAssosiate_id(dAttendance.getAssosiate_id());
			attend.setLocation(dAttendance.getLocation());
			attend.setDaily_attendance(dAttendance.getDaily_attendance());
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/uuuu");
			LocalDate localDate = LocalDate.now();
			attend.setDate(dtf.format(localDate));
			return dRepo.save(attend);
		}
		
		
}
