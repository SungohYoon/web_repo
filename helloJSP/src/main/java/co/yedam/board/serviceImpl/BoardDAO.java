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
	} // end close();

	public List<BoardVO> selectList() {

		sql = "SELECT * FROM BOARD ORDER BY BOARD_NO";

		List<BoardVO> list = new ArrayList<>();

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

		sql = "SELECT * FROM BOARD WHERE BOARD_NO = ?";

		BoardVO vo = new BoardVO();

		conn = ds.getConnection();

		try {

			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNO);

			rs = psmt.executeQuery();

			if (rs.next()) {

				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWriter(rs.getString("writer"));

			}

			rs.close();

		} catch (SQLException e) {

			e.printStackTrace();

		} finally {

			close();

		}

		return vo;

	}// end select

	public int insert(BoardVO vo) {
		
		sql = "INSERT INTO BOARD(BOARD_NO, TITLE, CONTENT, WRITER, IMAGE) " + "VALUES(SEQ_BOARD.NEXTVAL, ?, ?, ?, ?)";
		conn = ds.getConnection();
		
		try {
			
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getImage());
			
			int r = psmt.executeUpdate();
			return r;
			
		} catch (SQLException e) {
			
			e.printStackTrace();
			
		} finally {
			
			close();
			
		}
		
		return 0;
		
	}// end insert

	public int update(BoardVO vo) {
		
		sql = "UPDATE BOARD SET TITLE = ?, CONTENT = ?, WRITER = ?, IMAGE = NVL(?, IMAGE), LAST_UPDATE = SYSDATE WHERE BOARD_NO = ?";
		conn = ds.getConnection();
		
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		
		int r = 0;
		
		try {
			
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getImage());
			psmt.setInt(5, vo.getBoardNo());
			
			r = psmt.executeUpdate();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
			
		} finally {
			
			close();
			
		}
		
		return r;
		
	}// end

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

	// 아이디/ 비번 => 조회값 boolean.
	public boolean getUser(String id, String pw) {

		sql = "SELECT * FROM MEMBER WHERE MID = ? AND PASS = ?";

		conn = ds.getConnection();

		try {

			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);

			rs = psmt.executeQuery();

			if (rs.next()) {

				return true;

			}

		} catch (SQLException e) {

			e.printStackTrace();

		} finally {

			close();
		}

		return false;

	}

} // end DAO
