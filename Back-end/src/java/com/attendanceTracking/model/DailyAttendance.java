package com.attendanceTracking.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DailyAttendance {
	
	@Id
	private int assosiate_id;
	private String location;
	private String daily_attendance;
	private String date;

	public int getAssosiate_id() {
		return assosiate_id;
	}

	public void setAssosiate_id(int assosiate_id) {
		this.assosiate_id = assosiate_id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDaily_attendance() {
		return daily_attendance;
	}

	public void setDaily_attendance(String daily_attendance) {
		this.daily_attendance = daily_attendance;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String string) {
		this.date = string;
	}

	@Override
	public String toString() {
		return "DailyAttendance [assosiate_id=" + assosiate_id + ", location=" + location + ", daily_attendance="
				+ daily_attendance + ", date=" + date + "]";
	}
}
