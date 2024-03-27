
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateMakeInput {
    name: string;
    originCountry: string;
}

export interface CreateModelInput {
    modelName: string;
    year: number;
    mttRatio: number;
    fkMakeId: number;
}

export interface CreateOrderInput {
    fkUserId: number;
    fkTreeId: number;
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

export interface UserLogin {
    email: string;
    password: string;
}

export interface Make {
    id: string;
    name: string;
    originCountry: string;
    vehicles: Vehicle[];
}

export interface IQuery {
    make(id: string): Nullable<Make> | Promise<Nullable<Make>>;
    makes(): Make[] | Promise<Make[]>;
    model(id: string): Nullable<Make> | Promise<Nullable<Make>>;
    models(): Make[] | Promise<Make[]>;
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
    createMake(makeInput: CreateMakeInput): Make | Promise<Make>;
    createModel(modelInput: CreateModelInput): Model | Promise<Model>;
    createOrder(orderInput: CreateOrderInput): Order | Promise<Order>;
    createTree(treeInput: CreateTreeInput): Tree | Promise<Tree>;
    createUser(userInput: CreateUserInput): SignedUser | Promise<SignedUser>;
    createVehicle(vehicleInput: CreateVehicleInput): Tree | Promise<Tree>;
}

export interface Model {
    id: string;
    modelName: string;
    year: number;
    mttRatio: number;
    fkMakeId: number;
}

export interface Order {
    id: string;
    fkUserId: string;
    fkTreeId: string;
    quantity: number;
    totalPrice: number;
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
    userRole: string;
    orders?: Nullable<Nullable<Order>[]>;
}

export interface SignedUser {
    token: string;
    user: User;
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
