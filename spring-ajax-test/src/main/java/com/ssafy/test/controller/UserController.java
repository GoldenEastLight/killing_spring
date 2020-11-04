package com.ssafy.test.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssafy.test.dto.UserInfo;
import com.ssafy.test.service.UserService;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "index";
	}
	
	/**
	 * 성공했을 경우 : 성공, 사용자 정보 : UserInfo객체 - json객체
	 * 실패했을 경우 : 실패 
	 * @param userInfo
	 * @param session
	 * @param model
	 * @return
	 */
	@PostMapping("/login.do")
	@ResponseBody // 이 메서드의 결과를 단순한 문자열로 넘기겠습니다.
	public Map<String, Object> login(UserInfo userInfo) throws Exception {
		Map<String, Object> result = new HashMap<>();
		try {
			UserInfo user = service.login(userInfo);
			if (user != null) { // 성공
				result.put("result", "1");
				result.put("user", user);
			} else { // 실패
				result.put("result", "0");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return result;
	}
}
