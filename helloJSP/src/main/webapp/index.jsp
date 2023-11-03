<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<a href="student/studentInfo.html">학생정보</a>
	<%
	String name = "홍길동";
	int age = 20;
	for (int i=0; i<5; i++){
	%>
	<p>이름은 <%=name %> 이고, 나이는 <%=age %> 입니다.<p>
	<%
	}
	%>
	
	<a href="FirstServlet.do">서블릿 링크</a>	
</body>
</html>