package com.sonicwall.api;

import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.sonicwall.model.*;
import com.sonicwall.model.security.*;
import org.springframework.http.MediaType;

import com.sonicwall.repo.UserRepository;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
This is a dummy rest controller, for the purpose of documentation (/session) path is map to a filter
 - This will only be invoked if security is disabled
 - If Security is enabled then SessionFilter.java is invoked
 - Enabling and Disabling Security is done at config/applicaton.properties 'security.ignored=/**'
*/

@RestController
@Api(tags = {"Authentication"})
public class Session {

  @Autowired
  private UserRepository userRepo;

  @ApiResponses(value = { @ApiResponse(code = 200, message = "Will return a security token, which must be passed in every request", response = SessionResponse.class) })
  @RequestMapping(value = "/session", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public SessionResponse newSession(@RequestBody LoginModel loginDetails, HttpServletRequest request, HttpServletResponse response) {
      System.out.format("\n /Session Called username=%s\n", loginDetails.getUsername());
      User user = userRepo.findOneByUserIdAndPassword(loginDetails.getUsername(), loginDetails.getPassword()).orElse(null);
      SessionResponse r = new SessionResponse();
      if (user != null){
        System.out.format("\n /User Details=%s\n", user.getFirstName());
        r.setToken("xxx.xxx.xxx");
        r.setFirstName(user.getFirstName());
        r.setLastName(user.getLastName());
        r.setEmail(user.getEmail());
        //r.setRole("ADMIN");
        r.setDefaultCustomerId(user.getDefaultCustomerId());
        r.setServiceProviderId(user.getSecurityProviderId());
      }
      else{
          r.setToken("INVALID");
      }
      return r;


  }

}
