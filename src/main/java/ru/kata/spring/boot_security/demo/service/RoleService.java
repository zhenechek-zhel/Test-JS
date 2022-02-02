package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.HashSet;
import java.util.List;

public interface RoleService {

    List<Role> getAllRoles();

    HashSet<Role> getSetOfRoles(String[] roleNames);

    void addRole(Role role);
}
