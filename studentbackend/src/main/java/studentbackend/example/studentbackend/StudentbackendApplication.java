package studentbackend.example.studentbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class , ErrorMvcAutoConfiguration.class })
public class StudentbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentbackendApplication.class, args);
	}

}
