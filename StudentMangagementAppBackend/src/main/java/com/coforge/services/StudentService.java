package com.coforge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.entities.Student;
import com.coforge.repository.StudentRepository;
@Service
public class StudentService {
	
	@Autowired
	StudentRepository repository;

	public List<Student> getAllStudents() {
		
		return repository.findAll();
	}

	public Student addStudent(Student student) {
		
		return repository.save(student);
	}

	public Student getStudentById(int id) {
		
		return repository.findById(id).get();
	}

}
