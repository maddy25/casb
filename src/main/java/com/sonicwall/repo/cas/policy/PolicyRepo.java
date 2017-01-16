package com.sonicwall.repo.cas.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.cas.policy.PolicyModel;
import java.util.Optional;
import java.util.*;

public interface PolicyRepo extends JpaRepository<PolicyModel, Long> {

    List<PolicyModel> findAll();
    List<PolicyModel> findByName(String policyName);
    Optional<PolicyModel> findOneByName(String policyName);
}
