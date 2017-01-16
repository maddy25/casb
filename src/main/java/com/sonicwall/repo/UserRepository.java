package com.sonicwall.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonicwall.model.security.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByUserId(String userId);
}

