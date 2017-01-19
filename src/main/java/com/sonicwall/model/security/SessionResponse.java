package com.sonicwall.model.security;
import io.swagger.annotations.*;
import lombok.*;

@Data
public class SessionResponse {
  @ApiModelProperty(example = "xxx.xxx.xxx", required = true)
  private String token = "xxx.xxx.xxx";
  private String firstName;
  private String LastName;
  private String email;
  private String role;
  private int defaultCustomerId;
  private int serviceProviderId;
}
