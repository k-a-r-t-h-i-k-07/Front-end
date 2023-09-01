package com.attendanceTracking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.attendanceTracking.model.MonthlyRtoDates;
import com.attendanceTracking.service.MonthlyRtoDatesService;

@RestController
@RequestMapping("/monthlyRtoDates")
public class MonthlyRtoDatesController {
	
	@Autowired
	MonthlyRtoDatesService mService;
	
	
	@PostMapping
	public MonthlyRtoDates updateMonthlyRtoDates(@RequestBody MonthlyRtoDates monthlyRtoDates) {
		return mService.saveMonthlyRtoDates(monthlyRtoDates);
		
	}
	
}
