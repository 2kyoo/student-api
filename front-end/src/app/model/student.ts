export class Student {
  id: number;
  fullName: string;
  gender: string;
  phoneNumber: string;
  address: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;


  constructor(id: number, fullName: string, gender: string, phoneNumber: string, address: string, age: number, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.fullName = fullName;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.age = age;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
