package com.ssafy.happyhouse.admin.service;

import java.util.List;

import com.ssafy.happyhouse.repository.dto.HouseInfoLike;
import com.ssafy.happyhouse.repository.dto.Member;

public interface AdminService {
	List<Member> select() throws Exception;
	List<HouseInfoLike> selectHouseInfoLike() throws Exception;

	int visit10s();

	int visit20s();

	int visit30s();

	int visit40s();

	int visit50s();

	int visit60s();
}
