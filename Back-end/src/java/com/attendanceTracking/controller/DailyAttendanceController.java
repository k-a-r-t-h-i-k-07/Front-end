package com.attendanceTracking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.attendanceTracking.model.DailyAttendance;
import com.attendanceTracking.service.DailyAttendanceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/dailyAttendance")
public class DailyAttendanceController {
	
	@Autowired
	private DailyAttendanceService dService;
	
	
	
	@PostMapping
	public DailyAttendance postDailyAttendance( @RequestBody DailyAttendance dailyAttendance) {
			return dService.updateDailyAttendance(dailyAttendance);
	}
	
}
