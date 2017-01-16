package com.sonicwall.model.security;

import com.sonicwall.model.*;
import lombok.*;

@Data
public class UserInfoResponse extends OperationResponse {
    private User data = new User();
}
