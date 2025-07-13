package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.spring_learn.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

import java.util.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
@RestController
public class AuthenticationController {
	
	@Autowired
	private JwtUtil jwtUtil;


	@GetMapping("/authenticate")
	public Map<String, String> authenticate(HttpServletRequest request) {
	    String authHeader = request.getHeader("Authorization");
	    
	    if (authHeader == null || !authHeader.startsWith("Basic ")) {
	        throw new RuntimeException("Missing or invalid Authorization header");
	    }

	    // decode credentials
	    String base64Credentials = authHeader.substring("Basic ".length()).trim();
	    byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
	    String credentials = new String(credDecoded, StandardCharsets.UTF_8);

	    String[] values = credentials.split(":", 2);
	    String username = values[0];
	    String password = values[1];

	    // validate user/password here or use Spring Security context

	    String token = jwtUtil.generateToken(username);

	    return Collections.singletonMap("token", token);
	}

}
