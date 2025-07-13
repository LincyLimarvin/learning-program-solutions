package com.cognizant.spring_learn.util;

import java.util.Date;
import java.security.Key;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
    private final String secret = "my-secret-key-my-secret-key-my-secret"; // 32+ chars
    private final Key key = Keys.hmacShaKeyFor(secret.getBytes());

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                .signWith(key) // no algorithm param needed here
                .compact();
    }
}
