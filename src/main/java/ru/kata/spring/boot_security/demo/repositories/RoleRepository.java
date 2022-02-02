package ru.kata.spring.boot_security.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.kata.spring.boot_security.demo.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("select r from Role r where r.roleName = :name")
    Role findRoleByRoleName(@Param("name") String name);
}
