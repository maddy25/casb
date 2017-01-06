package com.sonicwall.model.casb.policy;

import java.util.*;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class ActionResponse extends BaseResponse {
  @ApiModelProperty(required = true, value = "")
  private Integer totalCount   = 0;
  @ApiModelProperty(required = true, value = "")
  private ArrayList<ActionModel> data = new ArrayList<ActionModel>();
}
