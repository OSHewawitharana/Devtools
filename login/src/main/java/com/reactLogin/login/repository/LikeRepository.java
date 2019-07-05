package com.reactLogin.login.repository;

import com.reactLogin.login.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
}
