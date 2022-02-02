package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService {

    void create(User user);
    void delete(long id);
    List<User> getAllUsers();
    User getUser(long id);
    void updateUser(User user);
}
