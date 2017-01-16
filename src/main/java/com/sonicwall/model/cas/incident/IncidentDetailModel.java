package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

@Data
@Entity
@Table(name = "incident_detail")
public class IncidentDetailModel  {

  @Id
  private int    incidentId;
  private int    policyId;
  private Date   detectedOn;
  private int    eventId;
  private String ownerEmail;
  private String ownerName;
  private String platformUser;
  private String policyType;
  @ApiModelProperty(allowableValues = "NEW, IN_PROGRESS, DISMISSED, RESOLVED")
  private String status;
  @ApiModelProperty(allowableValues = "alert, info, warning, critical")
  private String severity;
  private String customerName;
  private int    securityProviderId;
  private String securityProviderName;
  private String platformName;
}
