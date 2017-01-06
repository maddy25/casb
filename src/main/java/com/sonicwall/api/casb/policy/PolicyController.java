package com.sonicwall.api.casb.policy;

import com.sonicwall.api.*;
import io.swagger.annotations.*;
import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;
import static com.sonicwall.model.BaseResponse.*;
import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.casb.policy.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/casb", produces = { "application/json" })
@Api(tags = {"Policy"})
public class PolicyController {

	@Autowired private ActionService policyActionService;
	@Autowired private PolicyService policyService;
  @Autowired private RuleService ruleService;

  @ApiOperation(value = "List of Policy Actions",  response = ActionResponse.class)
  @RequestMapping(value = "/actions", method = RequestMethod.GET)
  public ActionResponse getPolicyActions() throws NotFoundException {
      ActionResponse resp = new ActionResponse();
      ArrayList<ActionModel> actionList = policyActionService.getAllPolicyActions();
      resp.setMsgType(ResponseStatusEnum.SUCCESS);
      resp.setData(actionList);
      resp.setTotalCount(actionList.size());
      return resp;
  }

  @ApiOperation(value = "List of Policies", response = PolicyResponse.class)
  @RequestMapping(value = "/policies", method = RequestMethod.GET)
  public PolicyResponse getPolicies() throws NotFoundException {
      PolicyResponse resp = new PolicyResponse();
      ArrayList<PolicyModel> policyList = policyService.getAllPolicies();
      resp.setMsgType(ResponseStatusEnum.SUCCESS);
      resp.setData(policyList);
      resp.setTotalCount(policyList.size());
      return resp;
  }

  @ApiOperation(value = "List of Rules", response = RuleResponse.class)
  @RequestMapping(value = "/rules", method = RequestMethod.GET)
  public RuleResponse getRules() throws NotFoundException {
      RuleResponse resp = new RuleResponse();
      ArrayList<RuleModel> ruleList = ruleService.getAllRules();
      resp.setMsgType(ResponseStatusEnum.SUCCESS);
      resp.setData(ruleList);
      resp.setTotalCount(ruleList.size());
      return resp;
  }


}
