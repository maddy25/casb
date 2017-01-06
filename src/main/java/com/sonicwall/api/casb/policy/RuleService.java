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
public class RuleService {

  @Autowired
  private RuleRepo ruleRepo;

	public ArrayList<RuleModel> getAllRules(){
      ArrayList<RuleModel> ruleList = ruleRepo.findAll();
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
