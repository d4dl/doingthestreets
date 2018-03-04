package com.d4dl.dts.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

/**
 * A user role
 */
@Entity
@Table(name = "role")
@Data
public class Role extends BaseEntity {
    private String name;

    @ManyToMany
    private Set<User> users;
}
