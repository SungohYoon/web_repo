
<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<h3>상세화면(조회화면)</h3>
	<form action="modifyForm.do" name="myFrm" enctype="multipart/form-data">
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>" class="form-cintrol">
		<table class="table">
			<tr>
				<th>글번호</th>
				<td><%=vo.getBoardNo()%></td>
				<th>작성일시</th>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<tr>
				<th>글제목</th>
				<td colspan="3"><%=vo.getTitle()%></td>
			</tr>
			<tr>
				<td colspan="4"><textarea rows="5" cols="40" class="form-control"><%=vo.getContent()%></textarea>
				</td>
			</tr>
			<tr>
				<th>이미지</th>
				<td colspan="3">
					<%if (vo.getImage() != null) {%>
				    <td colspan="3"></td>
				    <%} else {%>
				   <td colspan="3"><img src="images/<%=vo.getImage()%>" width="100px" style="display: block; margin: 0px auto;"></td>
				<%
				}
				%>
			</tr>
			<tr>
				<th>작성자</th>
				<td><%=vo.getWriter()%></td>
				<th>조회수</th>
				<td><%=vo.getViewCnt()%></td>
			</tr>
			<tr>
				<td colspan="4" align="center">
					<%if (logId != null && logId.equals(vo.getWriter())) {%>
					<input type="submit" value="수정" class="btn btn-primary"> 
					<input type="button" value="삭제" onclick="location.href='removeBoard.do?bno=<%=vo.getBoardNo()%>'" class="btn btn-warning">
                    <%} else {%>
					<input disabled type="submit" value="수정"> 
					<input disabled type="button" value="삭제"> 
					<%
					}
					%>
				</td>
			</tr>
		</table>
	</form>
	<p>
		<a href="boardList.do">목록으로</a>
	</p>
	<script>
		document.querySelector('input[type=button]').addEventListener('click',
				function(e) {
					document.forms.myFrm.action = 'removeForm.do';
					document.forms.myFrm.submit();
				}))
	</script>

<%@include file="../layout/footer.jsp"%>