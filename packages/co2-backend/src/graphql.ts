
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SignInInput {
    email: string;
    password: string;
}

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
    fkVehicleId: number;
    quantity: number;
}

export interface CreateTreeInput {
    species: string;
    unitPrice: number;
    age: number;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface CreateVehicleInput {
    fkMakeId: number;
    fkModelId: number;
    fkUserId: number;
    mileage: number;
    imageURL?: Nullable<string>;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface SuccessResponse {
    token: string;
    user: User;
}

export interface IMutation {
    signIn(signInInput: SignInInput): SuccessResponse | Promise<SuccessResponse>;
    createMake(makeInput: CreateMakeInput): Make | Promise<Make>;
    createModel(modelInput: CreateModelInput): Model | Promise<Model>;
    createOrder(orderInput: CreateOrderInput): Order | Promise<Order>;
    createTree(treeInput: CreateTreeInput): Tree | Promise<Tree>;
    createUser(userInput: CreateUserInput): CreatedUser | Promise<CreatedUser>;
    createVehicle(vehicleInput: CreateVehicleInput): Vehicle | Promise<Vehicle>;
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
    leaderboard(): Vehicle[] | Promise<Vehicle[]>;
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
    fkVehicleId: string;
    quantity: number;
    totalPrice: number;
}

export interface Tree {
    id: string;
    species: string;
    unitPrice: number;
    age: number;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userRole: string;
    orders?: Nullable<Nullable<Order>[]>;
}

export interface CreatedUser {
    token: string;
    user: User;
}

export interface Vehicle {
    id: string;
    fkMakeId: number;
    fkModelId: number;
    fkUserId: number;
    mileage: number;
    make?: Nullable<Make>;
    model?: Nullable<Model>;
    imageURL?: Nullable<string>;
    totalTrees?: Nullable<number>;
}

type Nullable<T> = T | null;
