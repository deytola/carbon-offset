/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateMakeInput = {
  name: Scalars['String']['input'];
  originCountry: Scalars['String']['input'];
};

export type CreateModelInput = {
  fkMakeId: Scalars['Int']['input'];
  modelName: Scalars['String']['input'];
  mttRatio: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type CreateOrderInput = {
  fkTreeId: Scalars['Int']['input'];
  fkUserId: Scalars['Int']['input'];
  fkVehicleId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateTreeInput = {
  age: Scalars['Int']['input'];
  species: Scalars['String']['input'];
  unitPrice: Scalars['Int']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateVehicleInput = {
  fkMakeId: Scalars['Int']['input'];
  fkModelId: Scalars['Int']['input'];
  fkUserId: Scalars['Int']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
  mileage: Scalars['Int']['input'];
};

export type Make = {
  __typename?: 'Make';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  originCountry: Scalars['String']['output'];
  vehicles: Array<Vehicle>;
};

export type Model = {
  __typename?: 'Model';
  fkMakeId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  modelName: Scalars['String']['output'];
  mttRatio: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMake: Make;
  createModel: Model;
  createOrder: Order;
  createTree: Tree;
  createUser: User;
  createVehicle: Vehicle;
  signIn: SuccessResponse;
};


export type MutationCreateMakeArgs = {
  makeInput: CreateMakeInput;
};


export type MutationCreateModelArgs = {
  modelInput: CreateModelInput;
};


export type MutationCreateOrderArgs = {
  orderInput: CreateOrderInput;
};


export type MutationCreateTreeArgs = {
  treeInput: CreateTreeInput;
};


export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};


export type MutationCreateVehicleArgs = {
  vehicleInput: CreateVehicleInput;
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};

export type Order = {
  __typename?: 'Order';
  fkTreeId: Scalars['ID']['output'];
  fkUserId: Scalars['ID']['output'];
  fkVehicleId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  leaderboard: Array<Vehicle>;
  make?: Maybe<Make>;
  makes: Array<Make>;
  model?: Maybe<Make>;
  models: Array<Make>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  tree?: Maybe<Tree>;
  trees: Array<Tree>;
  user?: Maybe<User>;
  users: Array<User>;
  vehicle?: Maybe<Vehicle>;
  vehicles: Array<Vehicle>;
};


export type QueryMakeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTreeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Tree = {
  __typename?: 'Tree';
  age: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  species: Scalars['String']['output'];
  unitPrice: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders?: Maybe<Array<Maybe<Order>>>;
  password: Scalars['String']['output'];
  userRole: Scalars['String']['output'];
};

export type UserLogin = {
  __typename?: 'UserLogin';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  fkMakeId: Scalars['Int']['output'];
  fkModelId: Scalars['Int']['output'];
  fkUserId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Make>;
  mileage: Scalars['Int']['output'];
  model?: Maybe<Model>;
  totalTrees?: Maybe<Scalars['Int']['output']>;
};

export type LeaderboardQueryVariables = Exact<{ [key: string]: never; }>;


export type LeaderboardQuery = { __typename?: 'Query', leaderboard: Array<{ __typename?: 'Vehicle', id: string, totalTrees?: number | null, make?: { __typename?: 'Make', name: string } | null, model?: { __typename?: 'Model', modelName: string } | null }> };

export type GetMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMakesQuery = { __typename?: 'Query', makes: Array<{ __typename?: 'Make', id: string, name: string, originCountry: string }> };


export const LeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"make"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modelName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTrees"}}]}}]}}]} as unknown as DocumentNode<LeaderboardQuery, LeaderboardQueryVariables>;
export const GetMakesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMakes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"originCountry"}}]}}]}}]} as unknown as DocumentNode<GetMakesQuery, GetMakesQueryVariables>;