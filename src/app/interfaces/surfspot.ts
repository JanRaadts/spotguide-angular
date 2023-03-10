import { commentsChildren } from "./commentsChildren";

export interface surfspot{
    _id?: string
    ID?: string,
    slug?: string,
    name?: string,
    image: string,
    country?: string,
    city?: string,
    zip?: string,
    street?: string,
    coordinates?: string,
    latitude?: string,
    longitude?: string,
    description?: string,
    winddirection?: string,
    surfcenter?: string,
    parking?: string,
    camping?: string,
    comments?: any,
    __v?: any
}