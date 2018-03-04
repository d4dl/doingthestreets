package com.d4dl.dts.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}
