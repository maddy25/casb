package com.sonicwall.config.security;

import org.springframework.security.core.authority.AuthorityUtils;
import com.sonicwall.model.security.Role;
import com.sonicwall.model.security.User;


public class TokenUser extends org.springframework.security.core.userdetails.User {
    private User user;

    //For returning a normal user
    public TokenUser(User user) {
        super(user.getUserId(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()));
        //super(user.getUserName(), user.getPassword(), true, true, true, true,  AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    /*
    public Long getId() {
        return user.getId();
    }
    */

    public Role getRole() {
        return user.getRole();
    }
}
