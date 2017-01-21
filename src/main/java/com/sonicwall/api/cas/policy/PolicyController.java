package com.sonicwall.api.cas.policy;

import com.sonicwall.api.*;
import io.swagger.annotations.*;
import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
import static org.springframework.http.MediaType.*;
import static com.sonicwall.model.OperationResponse.*;
import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.cas.policy.*;
import com.sonicwall.repo.cas.policy.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/cas", produces = { "application/json" })
@Api(tags = {"Policy"})
public class PolicyController {

  @Autowired private JdbcTemplate jdbcTemplate;
	@Autowired private ActionService policyActionService;

  @ApiOperation(value = "List of Policy Actions",  response = ActionResponse.class)
  @RequestMapping(value = "/actions", method = RequestMethod.GET)
  public ActionResponse getPolicyActions() throws NotFoundException {
      ActionResponse resp = new ActionResponse();
      List<ActionModel> actionList = policyActionService.getAllPolicyActions();
      resp.setListStats(actionList, true);
      return resp;
  }

  @ApiOperation(value = "Policy Details", response = PolicyDetailResponse.class)
  @RequestMapping(value = "/policies", method = RequestMethod.GET)
  public PolicyDetailResponse getPolicies() {

    long prevPolicyId = -1, newPolicyId;
    PolicyDetailModel p = new PolicyDetailModel();

    PolicyDetailResponse resp = new PolicyDetailResponse();
    resp.setItems(new ArrayList<PolicyDetailModel>());
    String sql = "SELECT policy_id, policy_name, policy_type, policy_state, severity, rule_id, rule_name, customer_name, rule_condition, field_name, operator, value1, value2 from demo.policy_detail order by policy_id, rule_id";
    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);

    for (Map<String, Object> row : list) {
      newPolicyId = (int)row.get("policy_id");
      if (prevPolicyId != newPolicyId){
        p = new PolicyDetailModel((int)row.get("policy_id"), (String)row.get("policy_name"), (String)row.get("policy_type"), (String)row.get("policy_state"), (String)row.get("severity"), (int)row.get("rule_id"), (String)row.get("rule_name") );
        p.addCondition((String)row.get("rule_condition"), (String)row.get("field_name"), (String)row.get("operator"), (String)row.get("value1"), (String)row.get("value2") );
        resp.getItems().add(p);
        prevPolicyId = newPolicyId;
      }
      else{
        p.addCondition((String)row.get("rule_condition"), (String)row.get("field_name"), (String)row.get("operator"), (String)row.get("value1"), (String)row.get("value2"));
      }
    }
    return resp;




  }

}
