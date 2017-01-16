package com.sonicwall.api.cas.policy;

import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.cas.policy.*;
import com.google.common.base.Strings;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.sonicwall.repo.cas.policy.*;
import com.sonicwall.model.cas.policy.*;
import org.springframework.context.annotation.Bean;

@Service
public class RuleService {

  @Autowired
  private RuleRepo ruleRepo;

	public List<RuleModel> getAllRules(){
      List<RuleModel> ruleList = ruleRepo.findAll();
			return ruleList;
	}

	public boolean insertOrSavePolicy(RuleModel action) {
		this.ruleRepo.save(action);
		return true;
	}

	public boolean addNewPolicy(RuleModel action) {
    //TODO
    return false;
	}


}
