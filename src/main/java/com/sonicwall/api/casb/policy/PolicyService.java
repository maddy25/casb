package com.sonicwall.api.casb.policy;

import java.util.List;
import com.sonicwall.model.*;
import com.sonicwall.model.casb.policy.*;
import com.google.common.base.Strings;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.sonicwall.repo.casb.policy.*;
import com.sonicwall.model.casb.policy.*;
import org.springframework.context.annotation.Bean;
import java.util.*;

@Service
public class PolicyService {

  @Autowired
  private PolicyRepo policyRepo;

	public ArrayList<PolicyModel> getAllPolicies(){
      ArrayList<PolicyModel> actionList = policyRepo.findAll();
			return actionList;
	}

	public boolean insertOrSavePolicy(PolicyModel action) {
		this.policyRepo.save(action);
		return true;
	}

	public boolean addNewPolicy(ActionModel action) {
    //TODO
    return false;
	}


}
