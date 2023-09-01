package com.attendanceTracking.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MonthlyRtoDates {
	@Id
	private int assosiate_id;
	private String monthlyRtoDates;

	public int getAssosiate_id() {
		return assosiate_id;
	}

	public void setAssosiate_id(int assosiate_id) {
		this.assosiate_id = assosiate_id;
	}

	public String getMonthlyRtoDates() {
		return monthlyRtoDates;
	}

	public void setMonthlyRtoDates(String monthlyRtoDates) {
		this.monthlyRtoDates = monthlyRtoDates;
	}

	@Override
	public String toString() {
		return "MonthlyRtoDates [assosiate_id=" + assosiate_id + ", monthlyRtoDates=" + monthlyRtoDates + "]";
	}
}
