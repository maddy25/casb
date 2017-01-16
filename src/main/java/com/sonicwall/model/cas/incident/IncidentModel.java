package com.sonicwall.model.cas.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;
import io.swagger.annotations.ApiModelProperty;

@Data
@Entity
@Table(name = "incident")
public class IncidentModel  {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name="id")
  private int id = 0;

  @Column(name="policy_id")
  private int policyId =0;

  @Column(name="event_id")
  private String eventId = null;

  @Column(name="status")
  @ApiModelProperty(allowableValues = "NEW, IN_PROGRESS, DISMISSED, RESOLVED")
  private String status = null;

  @Column(name="owner_name")
  private String ownerName = null;

  @Column(name="owner_email")
  private String ownerEmail = null;

  @Column(name="platform_user")
  private String platformUser = null;

  @Column(name="details")
  private String details = null;

  @Column(name="detected_on")
  private Date detectedOn = null;
}
