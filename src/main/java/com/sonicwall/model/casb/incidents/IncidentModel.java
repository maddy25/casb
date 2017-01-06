package com.sonicwall.model.casb.incidents;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;

@Data
public class IncidentModel  {
  public enum IncidentStatusEnum {
     NEW, IN_PROGRESS, DISMISSED, RESOLVED
  };

  private String incidentId = null;
  private int matches = 0;
  private String assetName = null;
  private String assetSize = null;
  private String policyId = null;
  private IncidentStatusEnum status = null;
  private Date detectedAt = null;
  private String owner = null;
  private String ownerEmail = null;

}
