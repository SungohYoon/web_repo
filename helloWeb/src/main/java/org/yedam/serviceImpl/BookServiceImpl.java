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

	DataSource dataSource = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		BookVO vo;
		String sql = "SELECT * FROM BOOK";
		try {
			conn = dataSource.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while(rs.next()) {
				vo = new BookVO();
				vo.setBookCode(rs.getString("bookCode"));
				vo.setBookTitle(rs.getString("bookTitle"));
				vo.setBookAuthor(rs.getString("bookAuthor"));
				vo.setBookPress(rs.getString("bookPress"));
				vo.setBookPrice(rs.getString("bookPrice"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (psmt != null)
					psmt.close();
				if (conn != null)
					conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return books;
	
	}

}
