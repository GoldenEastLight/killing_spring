package com.ssafy.happyhouse.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.happyhouse.admin.service.AdminService;
import com.ssafy.happyhouse.repository.dto.Member;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/main")
	public void adminForm(Model model) {
		try {
			List<Member> members = adminService.select();
			model.addAttribute("members", members);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
