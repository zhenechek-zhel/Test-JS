package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
public class AdminController {


    private UserService userService;
    private RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/admin")
    public String getUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "index";
    }

    @GetMapping("/admin/new")
    public String newUser(Model model) {
        model.addAttribute("roles", roleService.getAllRoles());
        model.addAttribute("user", new User());
        return "new";
    }

    @PostMapping("/admin/new")
    public String add(@ModelAttribute("user") User user,
                      @RequestParam(value = "roleNames") String[] roleNames) {
        Set<Role> roles = new HashSet<>();
        for (String role : roleNames) {
            roles.add(roleService.findRoleByRoleName(role));
        }
        user.setRoles(roles);
        userService.create(user);
        return "redirect:/admin";
    }

    @GetMapping("/admin/user/{id}")
    public String showUserById(@PathVariable("id") Long id, Model model) {
        model.addAttribute("user", userService.getUser(id));
        return "user";
    }

    @GetMapping("/user")
    public String getUserInfo(@AuthenticationPrincipal UserDetails userDetails,
                              Model model){
        String username = userDetails.getUsername();
        User user = userService.findUserByUsername(username);
        model.addAttribute("user", user);
        return "userPage";
    }

    @DeleteMapping("/admin/delete/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.delete(id);
        return "redirect:/admin";
    }

    @GetMapping("/admin/edit/{id}")
    public String editUser(@PathVariable("id") Long id, Model model) {
        model.addAttribute("roles", roleService.getAllRoles());
        model.addAttribute("user", userService.getUser(id));
        return "edit";
    }

    @PatchMapping("/admin/edit")
    public String update(@ModelAttribute("user") User user,
                         @RequestParam(value = "nameRoles") String [] nameRoles) {
        Set<Role> roles = new HashSet<>();
        for (String role : nameRoles) {
            roles.add(roleService.findRoleByRoleName(role));
        }
        user.setRoles(roles);
        userService.updateUser(user);
        return "redirect:/admin";
    }
}
