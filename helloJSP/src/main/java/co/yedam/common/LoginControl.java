package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		
		BoardService svc = new BoardServiceImpl();
		
		// session: 서버 - 클라이언트


		if (svc.loginCheck(id, pw)) {

			HttpSession session = req.getSession();
			session.setAttribute("logId", id);
			
			try {

				resp.sendRedirect("boardList.do");

			} catch (IOException e) {

				e.printStackTrace();

			}

		} else {

			try {

				resp.sendRedirect("loginForm.do");

			} catch (IOException e) {

				e.printStackTrace();

			}

		}

	}

}
