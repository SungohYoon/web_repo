package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;
import co.yedam.reply.web.AddReplyControl;

import co.yedam.reply.web.RemoveReplyControl;
import co.yedam.reply.web.ReplyListControl;

public class FrontController extends HttpServlet {

	Map<String, Command> map = new HashMap<>();

	@Override
	public void init() throws ServletException {

		// 메인페이지
		map.put("/main.do", new MainControl());

		// 로그인
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		map.put("/memberList.do", new MemberListControl());

		// 목록 화면.
		map.put("/boardList.do", new BoardListControl());

		// 특정 게시물 불러오기.
		map.put("/getBoard.do", new GetBoardControl());

		// 등록화면, 등록처리.
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());

		// 수정화면, 수정처리
		map.put("/modifyFrom.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());

		// 삭제화면, 삭제처리
		map.put("/removeBoard.do", new RemoveBoardControl());
		map.put("/removeForm.do", new RemoveFormControl());
		
		// 댓글목록
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
//		map.put("/deleteReply.do", new DeleteReplyControl());
		map.put("/removeReply.do", new RemoveReplyControl());
		
		// 차트
		map.put("/chartForm.do", new ChartFormControl());
		map.put("/drawChart.do", new DrawChartControl());

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// 요청정보의 한글 인코딩 방식.
		req.setCharacterEncoding("UTF-8");

		System.out.println("FrontController");

		String uri = req.getRequestURI();

		String context = req.getServletContext().getContextPath();

		String page = uri.substring(context.length());

		System.out.println(page);

		Command controller = map.get(page);

		controller.execute(req, resp);
	}

}
