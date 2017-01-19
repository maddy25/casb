package com.sonicwall.model.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.persistence.*;
import lombok.*;
import javax.validation.constraints.*;
import java.util.EnumSet;

@Entity
public class User {
    @Id
    @Getter @Setter private String userId;

    //@Size(min = 4, max = 30)
    @Getter @Setter private String password = "";

    @Getter @Setter private String firstName;
    @Getter @Setter private String lastName;
    @Getter @Setter private String email;
    @Getter @Setter private int    securityProviderId;
    @Getter @Setter private int    defaultCustomerId;
    @Getter @Setter private String company;
    @Getter @Setter private String phone;
    @Getter @Setter private String address1;
    @Getter @Setter private String address2;
    @Getter @Setter private String country;
    @Getter @Setter private String postal;
    //@Getter @Setter EnumSet<Role>  roles;
    @Enumerated(EnumType.STRING)
    @Getter @Setter private Role role;

    //@JsonIgnore
    @Getter @Setter private boolean isActive;
    //@JsonIgnore
    @Getter @Setter private boolean isBlocked;
    @Getter @Setter private String  secretQuestion;
    @Getter @Setter private String  secretAnswer;
    @Getter @Setter private boolean enableBetaTesting;
    @Getter @Setter private boolean enableRenewal;

    public User(){
        this("new", "PASSWORD", Role.USER, "new", "new", true, "", "", "", "", "", "", "", "", true, false);
    }

    public User(String userId, String password, String firstName, String lastName){
        this(userId, password, Role.USER, firstName, lastName, true, "", "", "", "", "", "", "", "", true, false);
    }

    public User(String userId, String password, Role role, String firstName, String lastName){
        this(userId, password, role, firstName, lastName, true, "", "", "", "", "", "", "", "", true, false);
    }

    public User(String userId, String password, Role role, String firstName, String lastName, boolean isActive){
        this(userId, password, role, firstName, lastName, isActive, "", "", "", "", "", "", "", "", true, false);
    }

    public User(String userId, String password, Role role, String firstName, String lastName, boolean isActive,
         String company, String phone, String address1, String address2, String country, String postal,
         String secretQuestion, String secretAnswer, boolean enableRenewal, boolean enableBetaTesting){
        this.setUserId(userId);
        this.setEmail(userId);
        this.setPassword(new BCryptPasswordEncoder().encode(password));
        this.setRole(role);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setActive(isActive);
        this.setCompany(company);
        this.setPhone(phone);
        this.setAddress1(address1);
        this.setAddress2(address2);
        this.setCountry(country);
        this.setPostal(postal);
        this.setSecretQuestion(secretQuestion);
        this.setSecretAnswer(secretAnswer);
        this.setEnableRenewal(enableRenewal);
        this.setEnableBetaTesting(enableBetaTesting);
    }

}
