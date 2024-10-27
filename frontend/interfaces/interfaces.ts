export interface PriceDetail {
    id: number;
    shop_name: string;
    date: Date;
    time: string;
    fname: string;
    description: string;
    price: number;
    place: string;
}

export interface PricePair {
    detail1: PriceDetail;
    detail2: PriceDetail | null;
}

export interface TypesI {
    id: number;
    fname: string;
}

export interface Comment {
    name: string;
    email: string;
    rating: number;
    comment: string;
}

export interface SignUp {
    fname: string;
    emailid: string;
    password: string;
    lname: string
    age: number;
    contactno: number;
    zipcode: number;
    city: string;
    state: string;
    dob: string;
}


export interface Token{
    accesstoken : string ;
    tokentype : string
}


export interface UserCrd{
    username : string ;
    password : string 
}

export interface Id{
    id : number;
}