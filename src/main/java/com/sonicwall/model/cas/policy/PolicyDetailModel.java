package com.sonicwall.model.cas.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

@Data
//@Entity
//@Table(name = "policy_detail")
public class PolicyDetailModel  {

  public enum PolicySeverityEnum {CRITICAL, ALERT, WARNING, INFO};
  public enum PolicyStateEnum    {ACTIVE, INACTIVE};

  //@Id
  private long   policyId;
  private String policyName;
  private String policyType;
  //private PolicyStateEnum policyState;
  //private PolicySeverityEnum severity;
  @ApiModelProperty(allowableValues = "ACTIVE, INACTIVE")
  private String policyState;
  @ApiModelProperty(allowableValues = "CRITICAL, ALERT, WARNING, INFO")
  private String severity;
  private long   ruleId;
  private String ruleName;
  /*
  private long   customerId;
  private String customerName;
  private long   securityProviderId;
  private String ruleCondition;
  private String fieldName;
  private String operator;
  private String value1;
  private String value2;
  */
  //@Transient
  private List<Condition> conditions;
  public PolicyDetailModel(){}

  public PolicyDetailModel( long policyId, String policyName, String policyType, String policyState, String severity, long ruleId, String ruleName){
    this.policyId     = policyId;
    this.policyName   = policyName;
    this.policyType   = policyType;
    this.policyState  = policyState;
    this.severity     = severity;
    this.ruleId       = ruleId;
    this.ruleName     = ruleName;
    this.conditions   = new ArrayList<Condition>();
  }

  public void addCondition(String condition, String fieldName, String operator, String value1, String value2){
      Condition c = new Condition(condition, fieldName, operator, value1, value2);
      this.conditions.add(c);
  }

}

@Data
class Condition  {
  private String condition;
  private String fieldName;
  private String operator;
  private String value1;
  private String value2;

  public Condition(String condition, String fieldName, String operator, String value1, String value2){
    this.condition = condition;
    this.fieldName = fieldName;
    this.operator = operator;
    this.value1 = value1;
    this.value2 = value2;
  }

}

