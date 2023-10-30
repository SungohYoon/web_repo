package org.yedam.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService {

	private DataSource dataSource = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;

	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		String sql = "SELECT * FROM BOOK";
		conn = dataSource.getConnection();

		try {
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while (rs.next()) {
				BookVO vo = new BookVO();
				vo.setBookCode(rs.getString("book_code"));
				vo.setBookTitle(rs.getString("book_title"));
				vo.setBookAuthor(rs.getString("book_author"));
				vo.setBookPress(rs.getString("book_press"));
				vo.setBookPrice(rs.getInt("book_price"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return books;
	}
	
	private void close() {
		try {
			if(psmt!=null) {
				psmt.close();
			}
			if(conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
			
	}
			

