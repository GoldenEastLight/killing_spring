package com.ssafy.vue.dto;

public class Board {
	private int id;
	private String name;
	private String mailid;
	private String start_date;
	private int manager_id;
	private String title;
	private int dept_id;
	private float salary;
	private float commission_pct;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMailid() {
		return mailid;
	}

	public void setMailid(String mailid) {
		this.mailid = mailid;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public int getManager_id() {
		return manager_id;
	}

	public void setManager_id(int manager_id) {
		this.manager_id = manager_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getDept_id() {
		return dept_id;
	}

	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}

	public float getSalary() {
		return salary;
	}

	public void setSalary(float salary) {
		this.salary = salary;
	}

	public float getCommission_pct() {
		return commission_pct;
	}

	public void setCommission_pct(float commission_pct) {
		this.commission_pct = commission_pct;
	}

	@Override
	public String toString() {
		return "Board [id=" + id + ", name=" + name + ", mailid=" + mailid + ", start_date=" + start_date
				+ ", manager_id=" + manager_id + ", title=" + title + ", dept_id=" + dept_id + ", salary=" + salary
				+ ", commission_pct=" + commission_pct + "]";
	}

}