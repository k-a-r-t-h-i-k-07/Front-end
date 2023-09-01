package com.attendanceTracking.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.attendanceTracking.model.Associate;
import com.attendanceTracking.service.AttendanceService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/attendance")
public class AttendanceController {
	
	@Autowired
	private AttendanceService service;
	
	
	@GetMapping("/{id}")
	public Optional<Associate> getById(@PathVariable("id") Integer id){
		return service.showAll(id);
	}
	
	//Admin Page 
	@GetMapping("/showAll")
	public List<Associate> getAll() {
		return service.showAll();
	}
	
	//Admin Add New Associate
	@PostMapping("/addAssosiate")
	public Associate addAssosiate(@RequestBody Associate assosiate) {
		return service.addNewAssosiate(assosiate);
	}
	
	//Admin update Associate Details
	@PutMapping("/updateAssociate/{id}")
	public Associate updateDetails(@PathVariable("id") Integer id, @RequestBody Associate associate) {
		return service.updateAssociateDetails(id,associate);
		
	}
	
	//Admin Delete existig employee by Associate Id
	@DeleteMapping("/deleteAsssosiate/{id}")
	public void deleteAssosisateById(@PathVariable ("id") Integer id){
		 service.deleteAssociate(id);
	}
}
