package com.sonicwall.model.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.persistence.*;
import lombok.*;
import javax.validation.constraints.*;
import java.util.EnumSet;

@Entity
@Table(name = "user_view")
public class UserView {
    @Id
    @Getter @Setter private String userId;
    @JsonIgnore @Getter @Setter private String password = "";
    @Getter @Setter private String firstName;
    @Getter @Setter private String lastName;
    @Getter @Setter private String email;
    @Getter @Setter int securityProviderId;
    @Getter @Setter int customerId;
    @Getter @Setter private String securityProvider;
    @Getter @Setter private String customer;
    @Getter @Setter private String role;
    @Getter @Setter private boolean isActive;
    @Getter @Setter private boolean isBlocked;
}
