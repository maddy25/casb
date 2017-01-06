package com.sonicwall.model.security;

import com.sonicwall.model.*;
import lombok.*;

@Data
public class UserInfoResponse extends BaseResponse {
    private User data = new User();
}
