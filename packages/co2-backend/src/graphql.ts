
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTreeInput {
    species: string;
    age: string;
}

export interface Tree {
    id: string;
    species: string;
    age: number;
}

export interface IQuery {
    tree(id: string): Nullable<Tree> | Promise<Nullable<Tree>>;
    trees(): Tree[] | Promise<Tree[]>;
}

export interface IMutation {
    createTree(input: CreateTreeInput): Tree | Promise<Tree>;
}

type Nullable<T> = T | null;
