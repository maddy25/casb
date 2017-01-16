package com.sonicwall.repo.cas.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.cas.policy.RuleModel;
import java.util.Optional;
import java.util.*;

public interface RuleRepo extends JpaRepository<RuleModel, Long> {

    List<RuleModel> findAll();
    List<RuleModel> findByName(String ruleName);
    Optional<RuleModel> findOneByName(String ruleName);
}
