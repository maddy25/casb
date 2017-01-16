package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;


@Data
public  class IncidentBySeverityStatusModel{
  private IncidentByStatusModel alert;
  private IncidentByStatusModel info;
  private IncidentByStatusModel critical;
  private IncidentByStatusModel warning;
}

