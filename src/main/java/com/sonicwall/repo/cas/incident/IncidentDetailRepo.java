package com.sonicwall.repo.cas.incident;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import java.util.Optional;
import java.util.*;
import com.sonicwall.model.cas.incident.*;

public interface IncidentDetailRepo extends JpaRepository<IncidentDetailModel, Long>, JpaSpecificationExecutor {
    //public List<IncidentDetailModel> findAll();
    //public Page<IncidentDetailModel> findAll(Pageable p);
    //public Page<IncidentDetailModel> findFirst1000ByCustomerIdOrderByDetectedOnDesc(long customerId, Pageable p);
}


