import {
  Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getUser () {
    return this.httpClient.get('/assets/moks/user.json');
  }

  isAuthorized(): boolean {
      let token = localStorage.getItem('token');
      return token ? true : false;
  }
}
