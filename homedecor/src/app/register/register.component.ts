import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  user : User;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name:string; lastname:string, email:string, password:string, address:string})
  {
    console.log(postData);

    this.http.post('http://localhost:3000/api/signup',postData).subscribe(responseData => {
      console.log(responseData);
      alert("Welcome, your account is created");
    });
  }

}
