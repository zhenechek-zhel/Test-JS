package ru.kata.spring.boot_security.demo.repositories;

import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import javax.annotation.PostConstruct;
import java.util.Collection;


@Component
public class Repository {

    private UserService userService;
    private RoleService roleService;
    private RoleRepository roleRepository;

    public Repository(UserService userService, RoleService roleService, RoleRepository roleRepository) {
        this.userService = userService;
        this.roleService = roleService;
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    private void addUsers() {
        User admin = new User();
        admin.setRoles((Collection<Role>) roleRepository.findRoleByRoleName("ADMIN"));
        admin.setFirstName("Evgeniy");
        admin.setEmail("evgeniy@mail.com");
        admin.setUsername("evgen");
        admin.setPassword("$2a$12$aATh.f0VBoNpezElFX4qW.n28nxwBN5qmPSyHws7avyCDAbDWOOye"); // 123
        userService.create(admin);

    }
}