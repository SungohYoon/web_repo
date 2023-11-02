package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/addStudent.do")
public class AddStudentServlet extends HttpServlet {

	// init -> service -> destroy
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// 한글처리
		req.setCharacterEncoding("utf-8");

		String sid = req.getParameter("sid");
		String sname = req.getParameter("sname");
		String pass = req.getParameter("pass");
		String sdept = req.getParameter("sdept");
		String birth = req.getParameter("birth");

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		StudentVO vo = new StudentVO();

		vo.setStudentId(sid);
		vo.setStudentName(sname);
		vo.setStudentPassword(pass);
		vo.setStudentDept(sdept);

		try {

			vo.setStudentBirthday(sdf.parse(birth));

		} catch (ParseException e) {

			e.printStackTrace();
		}

		StudentService svc = new StudentServiceImpl();
		if (svc.addStudent(vo)) {

			resp.getWriter().print("{\"retCode\":\"OK\"}");

		} else {

			// {"retCode":"NG"}
			resp.getWriter().print("{\"retCode\":\"NG\"}");

		}

	}
}
