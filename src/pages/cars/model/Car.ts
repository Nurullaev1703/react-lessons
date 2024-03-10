export interface CarModel {
    uuid: string;
    year: number;
    color: string;
    price: number;
    model: string;
    brand: string;
}

export const cars: CarModel[] = [
    {
        uuid: "5f4ab06b-1f52-42e7-b8d8-6d68d416c813",
        year: 2020,
        color: "Red",
        price: 25000,
        model: "SUV",
        brand: "Toyota"
    },
    {
        uuid: "a2c8e4db-31e9-43c0-bb8c-75dbf56d1c72",
        year: 2018,
        color: "Blue",
        price: 30000,
        model: "Sedan",
        brand: "Honda"
    },
    {
        uuid: "7f9adff5-d498-4695-b34a-d7e77a4b19c9",
        year: 2019,
        color: "Green",
        price: 20000,
        model: "Truck",
        brand: "Ford"
    },
    {
        uuid: "bc919234-43bf-4a2e-9ff4-3f8a59aa35cf",
        year: 2021,
        color: "Black",
        price: 35000,
        model: "Hatchback",
        brand: "BMW"
    },
    {
        uuid: "8fe48246-189a-4cfc-8dfb-0a4cc7ab3473",
        year: 2017,
        color: "White",
        price: 18000,
        model: "SUV",
        brand: "Mercedes"
    },
    {
        uuid: "6b3c9580-52a4-472f-bef7-cf7cc344f50d",
        year: 2023,
        color: "Yellow",
        price: 40000,
        model: "Sedan",
        brand: "Audi"
    },
    {
        uuid: "b8a9a4f9-2c13-4e4f-8e90-cf21b69a3d8e",
        year: 2016,
        color: "Red",
        price: 22000,
        model: "Truck",
        brand: "Toyota"
    },
    {
        uuid: "4b8ad7a6-ff71-49f0-89d5-3de7b56c9ff9",
        year: 2022,
        color: "Blue",
        price: 27000,
        model: "Hatchback",
        brand: "Honda"
    },
    {
        uuid: "3b3e2a11-d80b-4e78-83d2-cb89d81d5668",
        year: 2015,
        color: "Green",
        price: 15000,
        model: "SUV",
        brand: "Ford"
    },
    {
        uuid: "d0f2d08b-28f6-4450-bd18-7758a019b9cf",
        year: 2014,
        color: "Black",
        price: 12000,
        model: "Sedan",
        brand: "Toyota"
    }
];

