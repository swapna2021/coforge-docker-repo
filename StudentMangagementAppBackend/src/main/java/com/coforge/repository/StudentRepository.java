package com.coforge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coforge.entities.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{

}
