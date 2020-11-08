package com.ssafy.happyhouse.admin.service;

import java.util.List;

import com.ssafy.happyhouse.repository.dto.Member;

public interface AdminService {
	List<Member> select() throws Exception;
}
