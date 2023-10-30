package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.serviceImpl.BookServiceImpl;

/**
 * Servlet implementation class BookListServlet
 */
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BookListServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		BookService svc = new BookServiceImpl();
		List<BookVO> list = svc.bookList();
		System.out.println(list);
		
		response.setContentType("text/xml;charset=UTF-8");
		PrintWriter out = response.getWriter();
		String str = "<dataset>";
				for (BookVO vo : list) {
					str += "<record>";
					str += "<bookCode>" + vo.getBookCode() + "</bookCode>";
					str += "<bookTitle>" + vo.getBookTitle() + "</bookTitle>";
					str += "<bookAuthor>" + vo.getBookAuthor() + "</bookAuthor>";
					str += "<bookPress>" + vo.getBookPress() + "</bookPress>";
					str += "<bookPrice>" + vo.getBookPrice() + "</bookPrice>";
				}
				str += "</dataset>";
				out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
