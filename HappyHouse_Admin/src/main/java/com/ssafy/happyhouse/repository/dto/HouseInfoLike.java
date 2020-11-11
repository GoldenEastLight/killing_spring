package com.ssafy.happyhouse.repository.dto;

import java.sql.Timestamp;

public class HouseInfoLike {
	private String memberId;
	private int houseNo;
	private Timestamp regDate;
	private int count;
	private String dong;
	private String aptname;
	private String code;
	private String buildyear;
	private String jibun;
	private String lat;
	private String lng;
	private String img;

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public int getHouseNo() {
		return houseNo;
	}

	public void setHouseNo(int houseNo) {
		this.houseNo = houseNo;
	}

	public Timestamp getRegDate() {
		return regDate;
	}

	public void setRegDate(Timestamp regDate) {
		this.regDate = regDate;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getDong() {
		return dong;
	}

	public void setDong(String dong) {
		this.dong = dong;
	}

	public String getAptname() {
		return aptname;
	}

	public void setAptname(String aptname) {
		this.aptname = aptname;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getBuildyear() {
		return buildyear;
	}

	public void setBuildyear(String buildyear) {
		this.buildyear = buildyear;
	}

	public String getJibun() {
		return jibun;
	}

	public void setJibun(String jibun) {
		this.jibun = jibun;
	}

	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

}
