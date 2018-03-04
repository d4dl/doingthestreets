package com.d4dl.dts.repository;

import com.d4dl.dts.model.Role;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface RoleRepository extends PagingAndSortingRepository<Role, String> {
}
