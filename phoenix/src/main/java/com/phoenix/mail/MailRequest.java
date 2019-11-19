package com.phoenix.mail;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

public class MailRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2428172330424428471L;

	@NotNull
	private String userEmail;

	@NotNull
	private String userName;
	@NotNull
	private String query;

	public MailRequest() {
		super();
	}

	public String getUserEmail() {
		return userEmail;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

}
