package com.ssafy.happyhouse.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.repository.dto.HouseInfoLike;
import com.ssafy.happyhouse.repository.dto.Member;
import com.ssafy.happyhouse.repository.mapper.AdminMapper;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminMapper adminMapper;

	@Override
	public List<Member> select() throws Exception {
		System.out.println(adminMapper);
		return adminMapper.select();
	}

	@Override
	public List<HouseInfoLike> selectHouseInfoLike() throws Exception {
		return adminMapper.selectHouseInfoLike();
	}
	public int visit10s() {
		return adminMapper.visitCount10();
	}

	@Override
	public int visit20s() {
		return adminMapper.visitCount20();
	}

	@Override
	public int visit30s() {
		return adminMapper.visitCount30();
	}

	@Override
	public int visit40s() {
		return adminMapper.visitCount40();
	}

	@Override
	public int visit50s() {
		return adminMapper.visitCount50();
	}

	@Override
	public int visit60s() {
		return adminMapper.visitCount60();
	}

}
