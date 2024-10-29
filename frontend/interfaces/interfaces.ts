// types/interfaces.ts

export interface PriceDetail {
    id: number;
    shop_name: string;
    date: string;
    time: string;
    flowname: string;
    main_description: string;
    rating: number;
    no_of_reviews: number;
    seller_type: string;
    availability: number;
    price: number;
    place: string;
    long_description: string;
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