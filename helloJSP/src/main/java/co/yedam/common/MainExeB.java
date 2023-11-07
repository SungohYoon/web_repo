package co.yedam.common;

import java.text.SimpleDateFormat;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MainExeB {
	public static void main(String[] args) {
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		// 학생아이디, 비밀번호, 이름, 학과, 생일.
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		BoardVO vo = new BoardVO();
//		StudentVO vo = new StudentVO();
//		String sid = new String();
//		
//		vo.setStudentId("park");
//		vo.setStudentName("신입생");
//		vo.setStudentPassword("1235");
//		vo.setStudentDept("영문학과");
//		
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}

		BoardService svc = new BoardServiceImpl();

//		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));

//		if(svc.removeBoard(4)) {
//			System.out.println("정상삭제");
//		} else {
//			System.out.println("삭제실패");
//		}

		svc.boardList().forEach(boards -> System.out.println(boards));
	}

}
