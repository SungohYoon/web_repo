package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;

public class BoardDAO {

	// 목록, 단건조회, 등록, 수정, 삭제
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	DataSource ds = DataSource.getInstance();
	String sql;

	public void close() {

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

	public List<BoardVO> selectList() {
		List<BoardVO> list = new ArrayList<>();
		sql = "SELECT * FROM BOARD ORDER BY BOARD_NO";
		conn = ds.getConnection();

		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
				list.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}

	public BoardVO select(int boardNO) {

		BoardVO vo = new BoardVO();

		sql = "SELECT * FROM BOARD WHERE BOARD_NO = ?";

		conn = ds.getConnection();

		return null;
	}

	public int insert(BoardVO vo) {
		return 0;
	}

	public int update(BoardVO vo) {
		return 0;
	}

	public int delete(int boardNo) {

		String sql = "DELETE FROM BOARD WHERE BOARD_NO = ?";
		conn = ds.getConnection();

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);

			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}

	// 조회수 증가.
	public int updateCnt(int boardNo) {
		sql = "UPDATE BOARD SET VIEW_CNT = VIEW_CNT + 1 WHERE BOARD_NO = ?";
		conn = ds.getConnection();

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);

			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}

}
