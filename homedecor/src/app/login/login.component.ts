import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Userlogin } from '../userlogin.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  constructor(private route : ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  loginClicked(form:NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;
    const login = { email :email, password: password};

    this.http.post('http://localhost:3000/api/signin', login).subscribe(responseData => {
      console.log(responseData);

      this.router.navigate(['/main']);
      alert("Login Successfull");
    })
    form.reset();
  }

}
