package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		BoardVO vo = new BoardVO();

		if (req.getMethod().equals("GET")) {

			// 제목, 내용, 작성자
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");

			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(content);

		} else if (req.getMethod().equals("POST")) {

			String saveDir = req.getServletContext().getRealPath("images");

			int size = 5 * 1024 * 1024;

			try {

				MultipartRequest mr = new MultipartRequest(req, saveDir, size, "UTF-8", new DefaultFileRenamePolicy());

				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");

				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setImage(img);
				vo.setContent(content);

			} catch (IOException e) {

				e.printStackTrace();

			}
		}

		BoardService svc = new BoardServiceImpl();

		if (svc.addBoard(vo)) {

			try {

				resp.sendRedirect("boardList.do");

			} catch (Exception e) {

				e.printStackTrace();

			}

		} else {

			try {

				resp.sendRedirect("boardForm.do");

			} catch (Exception e) {

				e.printStackTrace();

			}

		}

	} // end of execute.(OK)

}
