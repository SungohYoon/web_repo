package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String id = req.getParameter("id");
		String pw = req.getParameter("pass");

		BoardService svc = new BoardServiceImpl();

		MemberVO vo = svc.loginCheck(id, pw);

		if (vo != null) {

			HttpSession session = req.getSession();

			session.setAttribute("loginId", id);
			session.setAttribute("responsibility", vo.getResponsibility());

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
