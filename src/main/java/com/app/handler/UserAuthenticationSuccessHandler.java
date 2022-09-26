package com.app.handler;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException 
	{
		boolean hasAdminRole = false;
		boolean hasShopRole = false;
		boolean hasFarmerRole = false;
		boolean hasDriverRole =false;
		
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
		for (GrantedAuthority grantedAuthority : authorities) {
			if (grantedAuthority.getAuthority().equals("FARMER")) {
				hasFarmerRole = true;
				break;
			} else if (grantedAuthority.getAuthority().equals("ADMIN")) {
				hasAdminRole = true;
				break;
			} else if (grantedAuthority.getAuthority().equals("SHOP")) {
				hasShopRole = true;
				break;
			} else if (grantedAuthority.getAuthority().equals("DRIVER")) {
				hasDriverRole = true;
				break;
			}
			
			if (hasFarmerRole) {
				redirectStrategy.sendRedirect(request, response, "/");
			} else if (hasAdminRole) {
				redirectStrategy.sendRedirect(request, response, "/adminhome");
			} else if (hasShopRole) {
				redirectStrategy.sendRedirect(request, response, "/shophome");
			} else if (hasDriverRole) {
				redirectStrategy.sendRedirect(request, response, "/");
			} else {
				throw new IllegalStateException();
				//redirectStrategy.sendRedirect(request, response, "/");
			}
		}
		
		
		
		
		
		
		
	}
	
}
