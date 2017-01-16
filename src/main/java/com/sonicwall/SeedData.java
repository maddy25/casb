package com.sonicwall;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.sonicwall.api.UserInfoService;
// User Model and Repo
import com.sonicwall.model.security.User;
import com.sonicwall.model.security.Role;
import com.sonicwall.repo.UserRepository;

// CAS Policy Model and Repo
import com.sonicwall.model.cas.policy.*;
import com.sonicwall.repo.cas.policy.*;

//Import enums from Model Class
import static com.sonicwall.model.cas.policy.ActionModel.*;
import static com.sonicwall.model.cas.policy.PolicyModel.*;
import static com.sonicwall.model.cas.policy.RuleModel.*;

import java.util.*;

@Service
public final class SeedData {

	@Autowired private UserInfoService userInfoService;

	@Autowired private ActionRepo actionRepo;
  @Autowired private PolicyRepo policyRepo;
  @Autowired private RuleRepo ruleRepo;

	//Users
	public void insertDefaultUsers() {
		System.out.println("[ *** Mrin *** ]: Adding Users");
		this.addUser("admin"  , "admin");
		this.addUser("user"   , "user");
		this.addUser("demo"   , "demo");
		this.addUser("inactive", "inactive");
		this.addUser("nitinsw", "pwd4dev");
	}

	private void addUser(String username, String password) {
		Role role = username.equals("admin") ? Role.ADMIN: Role.USER;
		boolean isPendingActivation = username.equals("inactive") ? true: false;
		User user = new User(username, password, role , username, username, isPendingActivation );
		userInfoService.insertOrSaveUser(user);
	}

	//CAS Rules
  public void insertRules(){
		System.out.println("[ *** Mrin *** ]: Adding Rules");
		this.addRule( 1, "File Name"   , "Check file name only"       , RuleTypeEnum.FILE_NAME);
    this.addRule( 2, "File Type"   , "Check file extension only"  , RuleTypeEnum.FILE_TYPE);
    this.addRule( 3, "File Source" , "Check file Source and Name" , RuleTypeEnum.FILE_SOURCE);
    this.addRule( 4, "File Size"   , "Check file name and Size"   , RuleTypeEnum.FILE_SIZE);
    this.addRule( 5, "File Content", "Check file name and content", RuleTypeEnum.FILE_CONTENT);
	}
	private void addRule(long ruleId, String ruleName, String ruleDescription, RuleTypeEnum ruleType ) {
			RuleModel rule = new RuleModel(ruleId, ruleName, ruleDescription, ruleType);
			this.ruleRepo.save(rule);
	}

	//CAS PolicyAction
	public void insertPolicyActions(){
		System.out.println("[ *** Mrin *** ]: Adding Policy Actions");
		this.addPolicyActions("Delete", "Delete and purge", ActionTypeEnum.DELETE );
		this.addPolicyActions("Rename", "Rename the file", ActionTypeEnum.RENAME );
		this.addPolicyActions("Move"  , "Move file to junkbox", ActionTypeEnum.MOVE );
		this.addPolicyActions("Notify", "Notify user by email", ActionTypeEnum.NOTIFY );
		this.addPolicyActions("Check Virus", "Send the file for virus scanning", ActionTypeEnum.CHECK_FOR_VIRUS );
		this.addPolicyActions("Check Spam", "Send the file for virus scanning", ActionTypeEnum.CHECK_FOR_SPAM );
	}
	private void addPolicyActions(String actionName, String description, ActionTypeEnum type ) {
			ActionModel action = new ActionModel(actionName, description, type);
			this.actionRepo.save(action);
	}

	//CAS Policy
  // - Each Policy is associated with a Rule (Proximity) (eg: it applies to file-name, file-content, file-size, file-source etc )
  // - Each Policy will have one or more Actions
	public void insertPolicies(){
		System.out.println("[ *** Mrin *** ]: Adding Policies");
		this.addPolicy( "Executable", "Executable File", true, PolicyOwnerTypeEnum.SYSTEM, PolicyTypeEnum.FILE_TYPE, PolicySeverityEnum.WARNING, "System");
		this.addPolicy( "DLL",        "Windows DLL file", true, PolicyOwnerTypeEnum.SYSTEM, PolicyTypeEnum.FILE_TYPE, PolicySeverityEnum.WARNING, "System");
		this.addPolicy( "File Name",  "Matches a SPAM file name", true, PolicyOwnerTypeEnum.ADMIN, PolicyTypeEnum.FILE_NAME, PolicySeverityEnum.WARNING, "System");
		this.addPolicy( "Log File",   "Large log File", false, PolicyOwnerTypeEnum.USER, PolicyTypeEnum.FILE_TYPE, PolicySeverityEnum.WARNING, "System");
		this.addPolicy( "Virus",      "A trojan virus ", true, PolicyOwnerTypeEnum.ADMIN, PolicyTypeEnum.FILE_TYPE, PolicySeverityEnum.CRITICAL, "System");
	}
	private void addPolicy(String policyName, String description, Boolean isActive,  PolicyOwnerTypeEnum ownerType, PolicyTypeEnum type, PolicySeverityEnum severity, String submitBy ) {
			PolicyModel policy = new PolicyModel(policyName, description, isActive, ownerType, type, severity, submitBy  );
			this.policyRepo.save(policy);
	}


}
