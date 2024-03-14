import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class BackendConnect {
  constructor(private http: HttpClient, private route: Router) {}

  validateUserFromDB(data: any) {
    //console.log(data);
    this.http
      .post('https://backend-vulb.onrender.com/loginvalid', data)
      .subscribe((data) => {
        //console.log(data);
        if (data) {
          this.route.navigateByUrl('userdetails');
        }
      });
    //console.log(result);
  }
  addUserToDB(data: any) {
    console.log(data);
    //console.log(data)
    this.http
      .post('https://backend-vulb.onrender.com/addUser', data)
      .subscribe((data) => console.log(data));
  }

  getUserFromDB() {
    return this.http.get(
      //'https://fir-angular-7e7bf-default-rtdb.firebaseio.co/demo.json' //for error handle test interceptor
      'http://localhost:4000/loaduser'
    );
  }
}
