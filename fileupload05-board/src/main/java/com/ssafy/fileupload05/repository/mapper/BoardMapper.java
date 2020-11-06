package com.ssafy.fileupload05.repository.mapper;

import java.util.List;

import com.ssafy.fileupload05.repository.dto.Board;

public interface BoardMapper {
//	@Select("select * from boad order by no desc")
	List<Board> selectBoard();

	void insertBoard(Board board);
}
