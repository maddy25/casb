package com.sonicwall.model.cas.policy;

import java.util.*;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class ActionResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<ActionModel> content = new ArrayList<ActionModel>();
}
