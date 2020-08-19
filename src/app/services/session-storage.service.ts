import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {


  private static USER_KEY = "user";

  constructor() { }


  public saveUserSession(username: string): void
  {
    window.sessionStorage.setItem(SessionStorageService.USER_KEY, JSON.stringify({username: username}));
  }

  public isUserSaved(): boolean
  {
    return window.sessionStorage.getItem(SessionStorageService.USER_KEY) != null;
  }

  public removeUserSession(): void
  {
    window.sessionStorage.removeItem(SessionStorageService.USER_KEY);
  }

}
