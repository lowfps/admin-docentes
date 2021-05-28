export class User {
  public cod: number;
  public nickname: string;
  public email: string;
  public password: string;
  public avatar: string;
  public avatarBase64: string;

  constructor(cod:number, nickname:string, email:string, password:string, avatar:string, avatarBase64:string) {
    this.cod = cod;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.avatarBase64 = avatarBase64;
  }
}
