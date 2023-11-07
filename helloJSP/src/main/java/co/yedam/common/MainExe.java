package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;


public class MainExe {
	public static void main(String[] args) {
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
//		List<ReplyVO> list = mapper.replyList(1);
//		list.forEach(vo -> System.out.println(vo));
		
//		ReplyVO vo = mapper.selectReply(5);
//		System.out.println(vo);
		
//		ReplyVO vo = new ReplyVO();
//		vo.setBoardNo(5);
//		vo.setReply("5번째 댓글입니다.");
//		vo.setReplyer("user11");
//		mapper.insertReply(vo);
		
//		ReplyVO vo = new ReplyVO();
//		vo.setReply("사실 4번째 댓글이였습니다.");
//		vo.setReplyNo(6);
//		mapper.updateReply(vo);
		
		
//		mapper.deleteReply(6);

	}
}
