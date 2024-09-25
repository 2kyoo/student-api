import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {OptionsComponent} from "./components/options/options.component";
import {StudentComponent} from "./components/student/student.component";

export const routes: Routes = [
  {path: 'register',component: OptionsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'control', component: OptionsComponent},
  {path: 'students', component: StudentComponent},

];
