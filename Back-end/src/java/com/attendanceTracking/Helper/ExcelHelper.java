package com.attendanceTracking.Helper;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.attendanceTracking.model.Associate;



public class ExcelHelper {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  static String[] HEADERs = { "Associate_Id", "Associate_Name", "Project_Id", "Project_Desc" ,"Base_location","Project_Manager_Name","Project_Manager_Id","GenC_2022","EDL_Name"};
  static String SHEET = "GenC";

  public static List<Associate> excelToTutorials(InputStream is) {
    try {
      
      Workbook workbook = WorkbookFactory.create(is);
      Sheet sheet = workbook.getSheetAt(0);

      
      
      
      Iterator<Row> rows = sheet.iterator();

      List<Associate> tutorials = new ArrayList<Associate>();

      int rowNumber = 0;
      while (rows.hasNext()) {
        Row currentRow = rows.next();

        // skip header
        if (rowNumber == 0) {
          rowNumber++;
          continue;
        }

        Iterator<Cell> cellsInRow = currentRow.iterator();

        Associate tutorial = new Associate();

        int cellIdx = 0;
        while (cellsInRow.hasNext()) {
          Cell currentCell = cellsInRow.next();

          switch (cellIdx) {
          case 0:
            tutorial.setAssociate_id((int) currentCell.getNumericCellValue());
            break;
            
          case 1:
              tutorial.setAssociate_name(currentCell.getStringCellValue());
              break;
           
          case 2:
              tutorial.setProject_id((long) currentCell.getNumericCellValue());
              break;

          case 3:
              tutorial.setProject_desc(currentCell.getStringCellValue());
              break;

          case 4:
              tutorial.setBase_location(currentCell.getStringCellValue());
              break;
          case 5:
              tutorial.setProject_manager_name(currentCell.getStringCellValue());
              break;
          case 6:
              tutorial.setProject_manager_id((long) currentCell.getNumericCellValue());
              break;
          case 7:
              tutorial.setGenc_2022(currentCell.getStringCellValue());
              break;
          case 8:
              tutorial.setEdl_name(currentCell.getStringCellValue());
              break;

          default:
            break;
          }

          cellIdx++;
        }

        tutorials.add(tutorial);
      }

      workbook.close();

      return tutorials;
    } catch (IOException e) {
      throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
    }
  }

public static boolean hasExcelFormat(MultipartFile file) {

    if (!TYPE.equals(file.getContentType())) {
      return false;
    }

    return true;
}
//==================================================================================================================


public static ByteArrayInputStream DatabaseToExcel(List<Associate> Attendance) {

	  try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
	    Sheet sheet = workbook.createSheet(SHEET);

	    // Header
	    Row headerRow = sheet.createRow(0);

	    for (int col = 0; col < HEADERs.length; col++) {
	      Cell cell = headerRow.createCell(col);
	      cell.setCellValue(HEADERs[col]);
	    }
	    
	    int rowIdx = 1;
	    for (Associate tutorial : Attendance) {
	      Row row = sheet.createRow(rowIdx++);

	      row.createCell(0).setCellValue(tutorial.getAssociate_id());
	      row.createCell(1).setCellValue(tutorial.getAssociate_name());
	      row.createCell(2).setCellValue(tutorial.getProject_id());
	      row.createCell(3).setCellValue(tutorial.getProject_desc());
	      row.createCell(4).setCellValue(tutorial.getBase_location());
	      row.createCell(5).setCellValue(tutorial.getProject_manager_name());
	      row.createCell(6).setCellValue(tutorial.getProject_id());
	      row.createCell(7).setCellValue(tutorial.getGenc_2022());
	      row.createCell(8).setCellValue(tutorial.getEdl_name());
	    }

	    workbook.write(out);
	    return new ByteArrayInputStream(out.toByteArray());
	  } catch (IOException e) {
	    throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
	  }
	}
	}