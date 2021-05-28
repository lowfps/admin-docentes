export class Users {
  public cod: number;
  public codRol: number;
  public email: string;
  public password: string;
  public repassword?: string;
  public token: string;

  constructor(cod: number, codRol: number, email: string, password: string, repassword: string) {
    this.cod = cod;
    this.codRol = codRol;
    this.email = email;
    this.password = password;
    this.repassword = repassword;
    this.token = "";
  }
}
