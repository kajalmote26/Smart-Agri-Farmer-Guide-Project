package com.app.pojos;

public class HelloBean {
private Long id;
public HelloBean() {
	// TODO Auto-generated constructor stub
}
public HelloBean(Long id) {
	super();
	this.id = id;
}
public Long getMessage() {
	return id;
}
public void setMessage(Long id) {
	this.id = id;
}

}
