class User {
  constructor(name, email, avatar, role, loggedIn) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    this.role = role;
    this.loggedIn = loggedIn;
  }

  getRole() {
    if (this.role === true) {
      return 'ადმინი';
    } else {
      return 'მომხმარებელი';
    }
  }

  checkLogin() {
    return this.loggedIn;
  }
}
