package co.yedam.board.web;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		// 서블릿: 데이터 처리, JSP: 보여주는 역할
		BoardService svc = new BoardServiceImpl();

		List<BoardVO> list = svc.boardList();

		req.setAttribute("list", list);

		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/boardList.jsp");

		try {

			rd.forward(req, resp);

		} catch (Exception e) {

			e.printStackTrace();

		}

	}

} // OK
