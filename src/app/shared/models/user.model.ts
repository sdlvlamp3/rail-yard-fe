export class User {
      id: number;
      name: string;
      email: string;
      userType: string;
      password: string;
      token: any;
    
      constructor(
        name: string,
        email: string,
        userType: string,
        password?: string,
        token?: string,
        id?: number
      ) {
        this.name = name;
        this.email = email;
        this.userType = userType;
        this.password = password;
        this.token = token;
        this.id = id;
    
      }
    }
