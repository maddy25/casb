package com.sonicwall.model.casb.policy;

import java.util.ArrayList;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class PolicyResponse extends BaseResponse {
  @ApiModelProperty(required = true, value = "")
  private Integer totalCount   = 0;
  @ApiModelProperty(required = true, value = "")
  private ArrayList<PolicyModel> data = new ArrayList<PolicyModel>();
}
