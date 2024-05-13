export class User {
      id: number;
      name: string;
      email: string;
      user_type: string;
      password: string;
      token: any;

      constructor(
        name: string,
        email: string,
        user_type: string,
        password?: string,
        token?: string,
        id?: number
      ) {
        this.name = name;
        this.email = email;
        this.user_type = user_type;
        this.password = password;
        this.token = token;
        this.id = id;

      }
    }
