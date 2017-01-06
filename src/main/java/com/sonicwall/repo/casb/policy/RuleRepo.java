package com.sonicwall.repo.casb.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.casb.policy.RuleModel;
import java.util.Optional;
import java.util.*;

public interface RuleRepo extends JpaRepository<RuleModel, Long> {

    ArrayList<RuleModel> findAll();
    List<RuleModel> findByName(String ruleName);
    Optional<RuleModel> findOneByName(String ruleName);
}
