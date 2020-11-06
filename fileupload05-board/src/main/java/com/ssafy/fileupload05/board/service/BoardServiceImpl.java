package com.ssafy.fileupload05.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.fileupload05.repository.dto.Board;
import com.ssafy.fileupload05.repository.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper mapper;

	@Override
	public List<Board> list() {
		return mapper.selectBoard();
	}

	@Override
	public void wrtie(Board board) {
		mapper.insertBoard(board);
//		mapper.insertFile(file);

	}

}