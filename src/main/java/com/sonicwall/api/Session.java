package com.sonicwall.api;

import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.*;
import com.sonicwall.model.*;
import com.sonicwall.model.security.SessionResponse;
import org.springframework.http.MediaType;

/*
This is a dummy rest controller, for the purpose of documentation (/session) path is map to a filter
*/

@RestController
@Api(tags = {"Authentication"})
public class Session {
  @ApiResponses(value = { @ApiResponse(code = 200, message = "Will return a security token, which must be passed in every request", response = SessionResponse.class) })
  @RequestMapping(value = "/session", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public SessionResponse newSession(@RequestBody LoginModel loginDetails) {
      SessionResponse r = new SessionResponse();
      r.setToken("test");
      return r;
  }

}
