package com.attendanceTracking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendanceTracking.model.Associate;
import com.attendanceTracking.repository.AttendanceRepo;

@Service
public class AttendanceService {

	@Autowired
	private AttendanceRepo repo;

	public Optional<Associate> showAll(int id) {
		return repo.findById(id);
	}

	public List<Associate> showAll() {
		return repo.findAll();
	}
	

	public Associate addNewAssosiate(Associate associate) {
		Associate newAssociate = new Associate();
		newAssociate.setAssociate_id(associate.getAssociate_id());
		newAssociate.setAssociate_name(associate.getAssociate_name());
		newAssociate.setProject_id(associate.getProject_id());
		newAssociate.setProject_desc(associate.getAssociate_name());
		newAssociate.setBase_location(associate.getBase_location());
		newAssociate.setEdl_name(associate.getEdl_name());
		newAssociate.setGenc_2022(associate.getGenc_2022());
		newAssociate.setProject_manager_name(associate.getProject_manager_name());
		newAssociate.setProject_manager_id(associate.getProject_manager_id());
		return repo.save(newAssociate);
		
	}

	

	public void deleteAssociate(Integer id) {
		repo.deleteById(id);
	}


	public Associate updateAssociateDetails(Integer id, Associate associate) {
		Associate updatedAssociate = repo.findById(id).get();
		updatedAssociate.setProject_desc(associate.getProject_desc());
		updatedAssociate.setProject_id(associate.getProject_id());
		updatedAssociate.setProject_manager_id(associate.getProject_manager_id());
		updatedAssociate.setProject_manager_name(associate.getProject_manager_name());
		return repo.save(updatedAssociate);
	}
}
