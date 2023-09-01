package com.attendanceTracking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendanceTracking.model.MonthlyRtoDates;
import com.attendanceTracking.repository.MonthlyRtoRepo;

@Service
public class MonthlyRtoDatesService {
	
	@Autowired
	MonthlyRtoRepo mRepo;

	public MonthlyRtoDates saveMonthlyRtoDates(MonthlyRtoDates monthlyRtoDates) {
		MonthlyRtoDates monthlyRto =  new MonthlyRtoDates();
		monthlyRto.setAssosiate_id(monthlyRtoDates.getAssosiate_id());
		monthlyRto.setMonthlyRtoDates(monthlyRtoDates.getMonthlyRtoDates());
		return mRepo.save(monthlyRto);
	}
	
	
}
