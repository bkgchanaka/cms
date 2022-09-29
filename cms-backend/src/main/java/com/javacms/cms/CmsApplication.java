package com.javacms.cms;

import com.javacms.cms.model.Customer;
import com.javacms.cms.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;


@SpringBootApplication

public class CmsApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CmsApplication.class, args);
	}
	@Autowired
    private CustomerRepository customerRepository;

	@Override
	public void run(String... args) throws Exception {


	}
}