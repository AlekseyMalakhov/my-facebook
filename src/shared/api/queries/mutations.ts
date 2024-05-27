import { gql } from "@apollo/client";

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            id
            name
            surname
            profession
        }
    }
`;

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($id: ID!) {
        deleteUser(id: $id)
    }
`;

export const ADD_USER_MUTATION = gql`
    mutation AddUser($input: AddUserInput!) {
        addUser(input: $input) {
            id
            name
            surname
            profession
        }
    }
`;
