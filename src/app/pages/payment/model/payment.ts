export class Payment{
  id: string;
  name: string;
  product: string;
  user: string;
  value:number;
  paymentMetod:string;

  constructor(id: string, name: string,  product: string , user: string ,value:number,  paymentMetod:string ){
      this.id = id;
      this.name = name;
      this.product = product;
      this.user= user;
      this.value=value;
      this.paymentMetod=paymentMetod;

  }
}
