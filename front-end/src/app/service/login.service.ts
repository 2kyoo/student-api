import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }


  login(username: string, password: string) {
    if (username == 'Amr Zaki' && password == '336699') {
      sessionStorage.setItem('isRegistered', username);
      return true;
    }
    return false;
  }

  isLogin(){
    return !(sessionStorage.getItem('isRegistered') == null);
  }

  logout(){
    return sessionStorage.removeItem('isRegistered');
  }

}
