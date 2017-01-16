package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import com.sonicwall.model.*;
import lombok.*;
import java.util.*;

@Data
public  class IncidentByStatusResponse extends OperationResponse {
  @ApiModelProperty(required = true, value = "")
  private IncidentByStatusModel content;
}

