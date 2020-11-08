package com.ssafy.happyhouse.repository.mapper;

import java.util.List;

import com.ssafy.happyhouse.repository.dto.Member;

public interface AdminMapper {
	List<Member> select();
}
