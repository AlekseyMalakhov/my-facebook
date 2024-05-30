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

export type AddUserInput = {
  birthday: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  gender: Gender;
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  reg_device: RegDeviceInput;
};

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

export type LoginUserInput = {
  password: Scalars['String']['input'];
  reg_device: RegDeviceInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginUserInput>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type RegDevice = {
  __typename?: 'RegDevice';
  type: RegDeviceType;
  value: Scalars['String']['output'];
};

export type RegDeviceInput = {
  type: RegDeviceType;
  value: Scalars['String']['input'];
};

export enum RegDeviceType {
  Email = 'email',
  Phone = 'phone'
}

export type User = {
  __typename?: 'User';
  birthday: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  gender: Gender;
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  reg_device: RegDevice;
};

export type AddUserMutationVariables = Exact<{
  input: AddUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', first_name: string, last_name: string, birthday: string, gender: Gender, reg_device: { __typename?: 'RegDevice', type: RegDeviceType, value: string } } | null };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, first_name: string, last_name: string } | null };


export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"reg_device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;