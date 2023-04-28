import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(userName: string, password: string) {
    if (userName === 'abaron' && password === '123456') {
      return 200;
    }
    else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}
