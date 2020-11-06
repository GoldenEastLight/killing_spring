package com.ssafy.fileupload05.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.fileupload05.board.service.BoardService;
import com.ssafy.fileupload05.repository.dto.Board;

@Controller
@RequestMapping("/board")
public class BoardController {
   @Autowired
   BoardService service;
   
   /** 목록 이동 */
   @GetMapping("/list")
   public void List(Model model) {
      model.addAttribute("list", service.list());
   }
   
   /** 등록 이동 */
   @GetMapping("/write")
   public void write() {
	   
   }
   
   /** 등록 이동 */
   @PostMapping("/write")
   public String write(Board board) {
	   service.wrtie(board);
	   
	   //게시물 저장하기
	   
	   
	   //게시물 첨부파일 저장하기
	   
	   return "redirect:write";
   }

}