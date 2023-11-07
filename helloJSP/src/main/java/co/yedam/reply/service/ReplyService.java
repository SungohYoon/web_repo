package co.yedam.reply.service;

import java.util.List;

public interface ReplyService {

	public List<ReplyVO> replyList(int boardNo); // 목록. 
	public ReplyVO selectReply(int replyNo); // 단건조회.
	public boolean addReply(ReplyVO vo); // 등록.
	public int updateReply(ReplyVO vo); // 수정.
	public int deleteReply(int replyNo); // 삭제.


}
