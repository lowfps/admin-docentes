export class University {
  public cod: number;
  public nameUniversity: string;
  public logo: string;
  public logoBase64: string;

  constructor(cod: number, nameUniversity: string, logo:string, logoBase64: string){
    this.cod = cod;
    this.nameUniversity = nameUniversity;
    this.logo = logo;
    this.logoBase64 = logoBase64;
  }
}
