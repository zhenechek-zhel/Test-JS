package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.HashSet;
import java.util.Set;


@Controller
@RequestMapping("/admin")
public class AdminController {

    //после обновления пользователя не видно fistName, не перекидывает юзера не его страницу после логина

    private UserService userService;
    private RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping()
    public String getUsers(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        String username = userDetails.getUsername();
        User user = userService.findUserByUsername(username);
        model.addAttribute("user", user);
        model.addAttribute("allRoles", roleService.getAllRoles());
        model.addAttribute("users", userService.getAllUsers());
        model.addAttribute("newUser", new User());
        return "newView";
    }


    @PostMapping("/new")
    public String add(@ModelAttribute User userNew,
                      @RequestParam(value = "roleNames") String[] roleNames) {
        Set<Role> roles = new HashSet<>();
        for (String role : roleNames) {
            roles.add(roleService.findRoleByRoleName(role));
        }
        userNew.setRoles(roles);
        userService.create(userNew);
        return "redirect:/admin";
    }


    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.delete(id);
        return "redirect:/admin";
    }


    @PatchMapping("/edit/{id}")
    public String update(@ModelAttribute User user,
                         @RequestParam(value = "nameRoles" , required = false) String[] nameRoles) {
        Set<Role> roles1 = new HashSet<>();
        for (String role : nameRoles) {
            roles1.add(roleService.findRoleByRoleName(role));
        }
        user.setRoles(roles1);
        userService.updateUser(user);
        return "redirect:/admin";
    }
}
