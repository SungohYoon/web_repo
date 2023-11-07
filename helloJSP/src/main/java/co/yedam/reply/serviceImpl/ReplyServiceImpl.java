package co.yedam.reply.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSourceMybatis;
import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;

public class ReplyServiceImpl implements ReplyService {
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);

	@Override
	public List<ReplyVO> replyList(int parseInt) {
		// TODO Auto-generated method stub
		return mapper.replyList(parseInt);
	}

	@Override
	public ReplyVO selectReply(int replyNo) {
		// TODO Auto-generated method stub
		return mapper.selectReply(replyNo);
	}

	@Override
	public boolean addReply(ReplyVO vo) {
		// TODO Auto-generated method stub
		return mapper.insertReply(vo) > 0 ? true : false;
	}

	@Override
	public boolean updateReply(ReplyVO vo) {
		// TODO Auto-generated method stub
		return mapper.updateReply(vo) > 0 ? true : false;
	}
	
	@Override
	public boolean deleteReply(int replyNo) {
		// TODO Auto-generated method stub
		return mapper.deleteReply(replyNo) > 0 ? true : false;
	}
	
}
