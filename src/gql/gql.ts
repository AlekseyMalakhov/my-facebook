/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation AddUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            first_name\n            last_name\n            birthday\n            gender\n            reg_device {\n                type\n                value\n            }\n        }\n    }\n": types.AddUserDocument,
    "\n    query Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            first_name\n            last_name\n        }\n    }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            first_name\n            last_name\n            birthday\n            gender\n            reg_device {\n                type\n                value\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation AddUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            first_name\n            last_name\n            birthday\n            gender\n            reg_device {\n                type\n                value\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            first_name\n            last_name\n        }\n    }\n"): (typeof documents)["\n    query Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            first_name\n            last_name\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;