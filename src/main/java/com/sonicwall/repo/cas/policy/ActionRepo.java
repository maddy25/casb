package com.sonicwall.repo.cas.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.cas.policy.ActionModel;
import java.util.Optional;
import java.util.*;

public interface ActionRepo extends JpaRepository<ActionModel, Long> {
    List<ActionModel> findByName(String actionName);
    Optional<ActionModel> findOneByName(String actionName);
    List<ActionModel> findAllByOrderByNameAsc();
    List<ActionModel> findAll();
}
