
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateOrderInput {
    userId: number;
    treeId: number;
    quantity: number;
    totalPrice: number;
}

export interface CreateTreeInput {
    species: string;
    age: number;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface CreateVehicleInput {
    year: number;
    make: string;
    model: string;
    mileage?: Nullable<number>;
    imageURL?: Nullable<string>;
    mttRatio?: Nullable<number>;
}

export interface Order {
    id: string;
    userId: number;
    treeId: number;
    quantity: number;
    totalPrice: number;
}

export interface IQuery {
    order(id: string): Nullable<Order> | Promise<Nullable<Order>>;
    orders(): Order[] | Promise<Order[]>;
    tree(id: string): Nullable<Tree> | Promise<Nullable<Tree>>;
    trees(): Tree[] | Promise<Tree[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): User[] | Promise<User[]>;
    vehicle(id: string): Nullable<Vehicle> | Promise<Nullable<Vehicle>>;
    vehicles(): Vehicle[] | Promise<Vehicle[]>;
}

export interface IMutation {
    createOrder(orderInput: CreateOrderInput): Order | Promise<Order>;
    createTree(treeInput: CreateTreeInput): Tree | Promise<Tree>;
    createUser(userInput: CreateUserInput): User | Promise<User>;
    createVehicle(vehicleInput: CreateVehicleInput): Tree | Promise<Tree>;
}

export interface Tree {
    id: string;
    species: string;
    age: number;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    orders?: Nullable<Nullable<Order>[]>;
}

export interface Vehicle {
    id: string;
    year: number;
    make: string;
    model: string;
    mileage: number;
    imageURL: string;
    mttRatio: number;
}

type Nullable<T> = T | null;
