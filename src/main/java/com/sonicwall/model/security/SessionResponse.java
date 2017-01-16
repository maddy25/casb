package com.sonicwall.model.security;
import io.swagger.annotations.*;
import lombok.*;

@Data
public class SessionResponse {
  @ApiModelProperty(example = "xxx.xxx.xxx", required = true)
  private String token = "xxx.xxx.xxx";
  private String firstName = "Mickey";
  private String LastName  = "Mouse";
  private String email     = "MickeyMouse@sonicwall.com";
  private String role      = "ADMIN";
  private int defaultCustomerId = 20000;
  private int serviceProviderId = 20000;
}
