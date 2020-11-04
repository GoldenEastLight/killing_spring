package com.ssafy.guestbook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ssafy.guestbook.model.MemberDto;
import com.ssafy.guestbook.model.service.UserService;

@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/user", method = RequestMethod.GET, headers = { "Content-type=application/json" })
	public List<MemberDto> userList() {
		return userService.userList();
	}
	
	/*
	[
	 	{"userid": "관리자", "username": "ssafy",,},
	 	{}
	]
	
	select userid, userpwd, username, email, address, 
	       date_format(joindate, '%y.%m.%d') joindate
	  from ssafy_member
	 order by joindate desc
	*/
//	@RequestMapping(value = "/user", method = RequestMethod.POST, headers = { "Content-type=application/json" })
//	public List<MemberDto> userRegister(MemberDto memberDto) {
		
//		return userService.userList();
//	}
	
//	@RequestMapping(value = "/user/", method = RequestMethod.GET, headers = { "Content-type=application/json" })
//	public MemberDto userInfo(String userid) {
//		return userService.userInfo(userid);
//	}
	
//	@RequestMapping(value = "/user", method = RequestMethod.PUT, headers = { "Content-type=application/json" })
//	public List<MemberDto> userModify(@RequestBody MemberDto memberDto) {
//		userService.userModify(memberDto);
//		return userService.userList();
//	}
	
//	@RequestMapping(value = "/user/{userid}", method = RequestMethod.DELETE, headers = { "Content-type=application/json" })
//	public List<MemberDto> userDelete(@PathVariable("userid") String userid) {
//		userService.userDelete(userid);
//		return userService.userList();
//	}
	
}







