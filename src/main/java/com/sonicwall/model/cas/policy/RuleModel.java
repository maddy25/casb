package com.sonicwall.model.cas.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

@Entity
@Data
public class RuleModel  {

  public enum RuleTypeEnum { FILE_NAME, FILE_TYPE, FILE_SOURCE, FILE_SIZE, FILE_CONTENT };

  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long ruleId;
  private String name;
  private String description;
  private RuleTypeEnum type;

  public RuleModel(){}

  public RuleModel(long ruleId, String ruleName, String description, RuleTypeEnum type){
      //this.setRuleId(ruleId);
      this.setName(ruleName);
      this.setDescription(description);
      this.setType(type);
  }


}
