import { makeAutoObservable } from 'mobx';

class User {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  get user() {
    return this.user;
  }

  get isLogged() {
    return this.user !== null;
  }
}

export default new User();
