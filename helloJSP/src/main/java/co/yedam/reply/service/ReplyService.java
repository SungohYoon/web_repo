package co.yedam.reply.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {

	public List<ReplyVO> replyList(int boardNo, int page); // 목록. 
	public ReplyVO selectReply(int replyNo); // 단건조회.
	public boolean addReply(ReplyVO vo); // 등록.
	public boolean updateReply(ReplyVO vo); // 수정.
	public boolean deleteReply(int replyNo); // 삭제.
	
	// 댓글건수.
	public int getTotalCnt(int boardNo);
	
	// 차트데이터.
	public List <Map<String, Object>> getReplyCountByWriter();


}
