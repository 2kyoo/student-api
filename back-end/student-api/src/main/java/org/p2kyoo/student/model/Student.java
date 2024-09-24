package org.p2kyoo.student.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.p2kyoo.student.model.enums.Gender;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String phoneNumber;

    private String address;

    private int age;

    @CreationTimestamp
    private LocalDate created;

    @UpdateTimestamp
    private LocalDate updated;

    @Enumerated(EnumType.STRING)
    private Gender gender;

}
