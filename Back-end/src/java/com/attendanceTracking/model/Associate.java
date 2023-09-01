
package com.attendanceTracking.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Associate {

	@Id
	private int associate_id;
	private String associate_name;
	private long project_id;
	private String project_desc;
	private String base_location;
	private String edl_name;
	private String genc_2022;
	private String project_manager_name;
	private long project_manager_id;


	public int getAssociate_id() {
		return associate_id;
	}

	public void setAssociate_id(int associate_id) {
		this.associate_id = associate_id;
	}

	public String getAssociate_name() {
		return associate_name;
	}

	public void setAssociate_name(String associate_name) {
		this.associate_name = associate_name;
	}

	public long getProject_id() {
		return project_id;
	}

	public void setProject_id(long project_id) {
		this.project_id = project_id;
	}

	public String getProject_desc() {
		return project_desc;
	}

	public void setProject_desc(String project_desc) {
		this.project_desc = project_desc;
	}

	public String getBase_location() {
		return base_location;
	}

	public void setBase_location(String base_location) {
		this.base_location = base_location;
	}

	public String getEdl_name() {
		return edl_name;
	}

	public void setEdl_name(String edl_name) {
		this.edl_name = edl_name;
	}

	public String getGenc_2022() {
		return genc_2022;
	}

	public void setGenc_2022(String genc_2022) {
		this.genc_2022 = genc_2022;
	}

	public String getProject_manager_name() {
		return project_manager_name;
	}

	public void setProject_manager_name(String project_manager_name) {
		this.project_manager_name = project_manager_name;
	}

	public long getProject_manager_id() {
		return project_manager_id;
	}

	public void setProject_manager_id(long project_manager_id) {
		this.project_manager_id = project_manager_id;
	}
}
