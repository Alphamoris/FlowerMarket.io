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

export interface TypesI{
    id : number ;
    fname : string ;
}

export interface Comment{
    name : string ;
    email : string ;
    rating : number ;
    comment : string ;
}