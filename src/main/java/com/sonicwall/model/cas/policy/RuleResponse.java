package com.sonicwall.model.cas.policy;

import java.util.*;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class RuleResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<RuleModel> content = new ArrayList<RuleModel>();
}
