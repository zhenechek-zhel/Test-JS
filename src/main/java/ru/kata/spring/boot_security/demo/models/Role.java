package ru.kata.spring.boot_security.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Role implements GrantedAuthority {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "roleName", unique = true)
    private String roleName;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<User> users;

    public Role() {

    }

    public Role(Long id) {
        this.id = id;
    }

    public Role(String roleName) {
        this.roleName = roleName;
    }



    @Override
    public String getAuthority() {
        return getRoleName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @JsonIgnore
    public Set<User> getUsers() {
        return users;
    }


    public void setUsers(Set<User> users) {
        this.users = users;
    }


}
