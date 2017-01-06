package com.sonicwall.model.casb.incidents;

import java.util.ArrayList;
import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;

@Data
public class IncidentResponse extends BaseResponse {
  @ApiModelProperty(required = true, value = "")
  private Integer totalCount   = 0;
  @ApiModelProperty(required = true, value = "")
  private ArrayList<IncidentModel> data = new ArrayList<IncidentModel>();
}
