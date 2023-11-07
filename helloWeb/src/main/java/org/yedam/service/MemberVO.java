package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
	
	@Override
	public String toString() {
		return "MemberVO [mid=" + mid + ", pass=" + pass + ", name= " + name + ", phone=" + "]";
	}
}
