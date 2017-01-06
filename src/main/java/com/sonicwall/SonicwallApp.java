package com.sonicwall;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
//Manually Added
import javax.annotation.PostConstruct;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.cloud.netflix.zuul.EnableZuulProxy; // To Enable Gateway Filter

import com.sonicwall.model.security.User;
import com.sonicwall.model.security.Role;
import com.sonicwall.repo.UserRepository;
import com.sonicwall.SeedData;

@SpringBootApplication
//@EnableZuulProxy
@EnableSwagger2
@ComponentScan(basePackages = "com.sonicwall")
@EnableJpaRepositories(basePackages ={ "com.sonicwall.repo"})
@EntityScan(basePackages ={ "com.sonicwall.model"})
public class SonicwallApp implements CommandLineRunner {

	@Override
	public void run(String... arg0) throws Exception {
		if (arg0.length > 0 && arg0[0].equals("exitcode")) {
			throw new ExitException();
		}
	}

	public static void main(String[] args) throws Exception {
		new SpringApplication(SonicwallApp.class).run(args);
	}

	class ExitException extends RuntimeException implements ExitCodeGenerator {
		private static final long serialVersionUID = 1L;

		@Override
		public int getExitCode() {
			return 10;
		}
	}

	@Bean
    public InitializingBean insertDefaultUsers() {
		return new InitializingBean() {
			@Autowired
			private SeedData seedData;

			public void afterPropertiesSet() throws Exception {
				System.out.println("\n------------------------------------");
				System.out.println("[ *** Mrin *** ]: Initializing data\n");
				seedData.insertDefaultUsers();
				seedData.insertPolicyActions();
        seedData.insertPolicies();
				System.out.println("\n------------------------------------");
			}
		};
    }

}



