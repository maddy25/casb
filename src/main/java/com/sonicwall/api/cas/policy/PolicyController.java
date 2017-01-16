package com.sonicwall.api.cas.policy;

import com.sonicwall.api.*;
import io.swagger.annotations.*;
import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;
import static com.sonicwall.model.OperationResponse.*;
import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.cas.policy.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/cas", produces = { "application/json" })
@Api(tags = {"Policy"})
public class PolicyController {

	@Autowired private ActionService policyActionService;
	@Autowired private PolicyService policyService;
  @Autowired private RuleService ruleService;

  @ApiOperation(value = "List of Policy Actions",  response = ActionResponse.class)
  @RequestMapping(value = "/actions", method = RequestMethod.GET)
  public ActionResponse getPolicyActions() throws NotFoundException {
      ActionResponse resp = new ActionResponse();
      List<ActionModel> actionList = policyActionService.getAllPolicyActions();
      resp.setListStats(actionList, true);
      return resp;
  }

  @ApiOperation(value = "List of Policies", response = PolicyResponse.class)
  @RequestMapping(value = "/policies", method = RequestMethod.GET)
  public PolicyResponse getPolicies() throws NotFoundException {
      PolicyResponse resp = new PolicyResponse();
      List<PolicyModel> policyList = policyService.getAllPolicies();
      resp.setListStats(policyList, true);
      resp.setTotalItems(policyList.size());
      return resp;
  }

  @ApiOperation(value = "List of Rules", response = RuleResponse.class)
  @RequestMapping(value = "/rules", method = RequestMethod.GET)
  public RuleResponse getRules() throws NotFoundException {
      RuleResponse resp = new RuleResponse();
      List<RuleModel> ruleList = ruleService.getAllRules();
      resp.setListStats(ruleList, true);
      return resp;
  }


}
