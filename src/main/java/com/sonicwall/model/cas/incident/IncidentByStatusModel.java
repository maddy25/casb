package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;


@Data
public  class IncidentByStatusModel  {
  private long newStatus;
  private long inProgress;
  private long dismissed;
  private long resolved;
}

