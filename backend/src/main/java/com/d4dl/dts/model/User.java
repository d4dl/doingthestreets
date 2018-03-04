package com.d4dl.dts.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

/**
 * A System user
 */
@Entity
@Data
public class User extends LocatableBaseEntity {
    private String username;
    private String password;
    @Transient
    private String passwordConfirm;

    @ManyToMany
    private Set<Role> roles;

    @OneToMany(mappedBy = "possesser")
    private Set<StreetBug> possessedStreetBugs;
}
