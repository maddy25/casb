package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;
import java.util.*;

@Data
public class IncidentDetailResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<IncidentDetailModel> items;
}
