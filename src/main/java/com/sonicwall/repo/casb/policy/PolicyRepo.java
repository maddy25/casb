package com.sonicwall.repo.casb.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.casb.policy.PolicyModel;
import java.util.Optional;
import java.util.*;

public interface PolicyRepo extends JpaRepository<PolicyModel, Long> {

    ArrayList<PolicyModel> findAll();
    List<PolicyModel> findByName(String policyName);
    Optional<PolicyModel> findOneByName(String policyName);
}
