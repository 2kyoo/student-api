import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private loginService: LoginService) {

  }
  ngOnInit(): void {
  }

  // @ts-ignore
  isAuthenticatedUser(){
    return this.isAuthenticatedUser();
  }

}
