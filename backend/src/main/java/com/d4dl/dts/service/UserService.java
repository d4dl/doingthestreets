package com.d4dl.dts.service;

import com.d4dl.dts.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
