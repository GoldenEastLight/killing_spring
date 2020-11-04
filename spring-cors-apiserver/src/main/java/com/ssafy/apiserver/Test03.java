package com.ssafy.apiserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test03 {
	// /cors/test03?callback=aaa
	// /cors/test03 => callback == null
	@GetMapping(value = "/cors/test03", produces = "text/html;charset=utf-8")
	public String service(String callback) {
		System.out.println("요청 들어옴");
		String result = "";
		/*
		 /cors/test03?callback=aaa

		 aaa('<h1>Api callback 호출 성공</h1>') // aaa함수 호출 하면서 ('<h1>Api callback 호출 성공</h1>')이라는 문자열을 파라미터로 준다.
		 function aaa(msg) {
		 
		 }
		
		 */
		if (callback != null) {
			result = callback + "('<h1>Api callback 호출 성공</h1>')";
		} else {
			result = "cb('<h1>Api callback 호출 성공</h1>')";
		}
		return result;
	}
}
