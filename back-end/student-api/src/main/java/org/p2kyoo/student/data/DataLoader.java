package org.p2kyoo.student.data;

import org.p2kyoo.student.model.Student;
import org.p2kyoo.student.model.enums.Gender;
import org.p2kyoo.student.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final StudentRepository studentRepository;

    public DataLoader(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Student student = new Student("John Doe",
                "01002458", "Cairo", 28, Gender.MALE);
        Student student1 = new Student("John Doe",
                "01002458", "Cairo", 28, Gender.MALE);
        Student student2 = new Student("Mary Doe",
                "01002458", "Cairo", 28, Gender.FEMALE);

        studentRepository.save(student);
        studentRepository.save(student1);
        studentRepository.save(student2);

    }
}
