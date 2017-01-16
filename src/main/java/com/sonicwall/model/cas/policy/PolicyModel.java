package com.sonicwall.model.cas.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

@Entity
@Data
public class PolicyModel  {

  public enum PolicyOwnerTypeEnum {USER, SYSTEM, ADMIN};
  public enum PolicyTypeEnum {TRUSTED_APP_BY_NAME, TRUSTED_SOURCE, FILE_TYPE, FILE_NAME, UNKNOWN_SOURCE, UNKNOWN_APP};
  public enum PolicySeverityEnum {CRITICAL, ALERT, WARNING, INFO};

  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long policyId;
  private String name;
  private String description;
  private Boolean isActive;
  private PolicyOwnerTypeEnum ownerType;
  private PolicyTypeEnum type;
  private PolicySeverityEnum severity;
  private Date creationDate;
  private String submitBy;
  //private RuleModel rule;
  private ArrayList<ActionModel> actionList;

  public PolicyModel(){}

  public PolicyModel(String policyName, String description, Boolean isActive,  PolicyOwnerTypeEnum ownerType, PolicyTypeEnum type, PolicySeverityEnum severity, String submitBy){
      this.setName(policyName);
      this.setDescription(description);
      this.setIsActive(isActive);
      this.setOwnerType(ownerType);
      this.setType(type);
      this.setSeverity(severity);
      this.setCreationDate(new Date());
      this.setSubmitBy(submitBy);
      //this.setRule(new RuleModel());
  }

}
