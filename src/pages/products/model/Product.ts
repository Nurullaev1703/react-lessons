export interface ProductModel {
    id:number,
    name:string,
    price:number
}

export const products: ProductModel[] = [
    {
        id:1,
        name: "Banana",
        price:500

    },
    {
        id:2,
        name: "Peach",
        price: 650
    },
    {
        id:3,
        name: "Apple",
        price: 520
    },
    {
        id:4,
        name: "Qiwi",
        price: 1000
    },
    {
        id:5,
        name: "Pineapple",
        price: 1500
    },
]