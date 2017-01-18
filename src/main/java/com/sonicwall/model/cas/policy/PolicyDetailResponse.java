package com.sonicwall.model.cas.policy;

import java.util.*;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class PolicyDetailResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<PolicyDetailModel> items;
}
