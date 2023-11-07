<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
<%
BoardVO vo = (BoardVO) request.getAttribute("vo");
%>

<h3>게시물 수정화면</h3>
<form action="modifyBoard.do" method="post">
	<input type="hidden" name="bno" value="<%=vo.getTitle()%>">
	<table border="1">
		<tr>
			<th>제목</th>
			<td><input type="text" name="title" value="<%=vo.getTitle()%>"></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input type="text" name="writer" value="<%=vo.getWriter()%>"></td>
		</tr>
		<tr>
			<td colspan="2"><textarea cols="40" rows="5" name="content"><%=vo.getContent()%></textarea></td>
		</tr>
		<tr>
			<th>파일명</th>
			<%
			if (vo.getImage() == null) {
			%>
			<td></td>
			<%
			} else {
			%>
			<td colspan="3"><img style="align: center;" width="150px"
				src="images/<%=vo.getImage()%>"></td>
			<%
			}
			%>
		</tr>
		<tr>
			<td colspan="2" align="center"><input type="submit"
				class="btn btn-warning" value="수정"> <input type="reset"
				class="btn btn-primary" value="초기화"></td>
		</tr>
	</table>
</form>
<%@ include file="../layout/footer.jsp"%>