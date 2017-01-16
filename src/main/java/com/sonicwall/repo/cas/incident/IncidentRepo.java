package com.sonicwall.repo.cas.incident;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.*;
import com.sonicwall.model.cas.incident.*;

public interface IncidentRepo extends JpaRepository<IncidentModel, Long> {
    public List<IncidentModel> findAll();
    public Page<IncidentModel> findAll(Pageable p);

}


