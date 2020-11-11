package com.ssafy.happyhouse.admin.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.admin.service.AdminService;

@RestController
@RequestMapping("/visit")
public class AdminRestController {
	@Autowired
	private AdminService adminService;

	@GetMapping("/age")
	public Map<String, Integer> adminForm() {
		Map<String, Integer> map = new HashMap<String, Integer>();
		int visit10 = adminService.visit10s();
		map.put("visit10", visit10);
		int visit20 = adminService.visit20s();
		map.put("visit20", visit20);
		int visit30 = adminService.visit30s();
		map.put("visit30", visit30);
		int visit40 = adminService.visit40s();
		map.put("visit40", visit40);
		int visit50 = adminService.visit50s();
		map.put("visit50", visit50);
		int visit60 = adminService.visit60s();
		map.put("visit60", visit60);
		
		return map;
	}
}
