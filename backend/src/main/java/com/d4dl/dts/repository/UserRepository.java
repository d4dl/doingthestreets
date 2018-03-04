package com.d4dl.dts.repository;

import com.d4dl.dts.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface UserRepository extends PagingAndSortingRepository<User, String> {
    User findByUsername(String username);
}
