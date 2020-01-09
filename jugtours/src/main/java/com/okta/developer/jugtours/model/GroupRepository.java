package com.okta.developer.jugtours.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Used to manage the group entity

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}
