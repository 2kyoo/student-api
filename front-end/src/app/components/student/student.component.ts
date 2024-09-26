import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  students: Student[]= [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
  }
}
