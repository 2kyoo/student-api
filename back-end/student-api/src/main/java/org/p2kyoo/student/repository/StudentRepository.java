package org.p2kyoo.student.repository;

import org.p2kyoo.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long> {
}
