
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
}

export interface IMutation {
    createOrder(orderInput: CreateOrderInput): Order | Promise<Order>;
    createTree(treeInput: CreateTreeInput): Tree | Promise<Tree>;
}

export interface Tree {
    id: string;
    species: string;
    age: number;
}

type Nullable<T> = T | null;
