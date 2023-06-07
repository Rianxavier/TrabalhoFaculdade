package com.banco.libertyBank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class LibertyBankApplication implements WebMvcConfigurer {
    public static void main(String[] args) {
        SpringApplication.run(LibertyBankApplication.class, args);
    }	
}
