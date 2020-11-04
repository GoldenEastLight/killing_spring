package com.ssafy.apiserver;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:7777")
@CrossOrigin(origins = "*") // 누가 호출하든지 다
public class Test04 {
	
	@GetMapping(value="/cors/test04", produces = "text/html;charset=utf-8")
//	public String service(HttpServletResponse response) {
	public String service() {
		System.out.println("요청 들어옴");
//		response.setHeader("Access-Control-Allow-Origin", "http://localhost:7777");
		return "<h1>Api 헤더 변경 호출 성공</h1>";
	}
}
