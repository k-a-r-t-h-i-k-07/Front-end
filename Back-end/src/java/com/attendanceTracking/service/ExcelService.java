package com.attendanceTracking.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.attendanceTracking.Helper.ExcelHelper;
import com.attendanceTracking.model.Associate;
import com.attendanceTracking.repository.AttendanceRepo;




@Service
public class ExcelService {
  @Autowired
  AttendanceRepo repository;

  public void save(MultipartFile file) {
    try {
      List<Associate> tutorials = ExcelHelper.excelToTutorials(file.getInputStream());
      System.out.println(tutorials);
      repository.saveAll(tutorials);
    } catch (IOException e) {
      throw new RuntimeException("fail to store excel data: " + e.getMessage());
    }
  }

//=======================================================================================================================
  
	
	  public ByteArrayInputStream load() { List<Associate> Attendance =
	  repository.findAll();
	  
	  ByteArrayInputStream in = ExcelHelper.DatabaseToExcel(Attendance); return in;
	  }
//====================================================================================================================

}
