package ru.kata.spring.boot_security.demo.repositories;

import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import javax.annotation.PostConstruct;



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
        User admin = new User("Evgeniy", "zhel186@mail.com", "admin", "admin");
        User user = new User("Liza", "liza@mail.com", "user", "user");
        Role  roleAdmin = new Role("ROLE_ADMIN");
        Role roleUser = new Role("ROLE_USER");
        roleService.addRole(roleAdmin);
        roleService.addRole(roleUser);
        admin.setOneRole(roleAdmin);
        user.setOneRole(roleUser);
        userService.create(admin);
        userService.create(user);
    }
}