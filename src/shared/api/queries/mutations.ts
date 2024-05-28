import { gql } from "@apollo/client";

export const ADD_USER_MUTATION = gql`
    mutation AddUser($input: AddUserInput!) {
        addUser(input: $input) {
            first_name
            last_name
            birthday
            gender
            mobile_number
            email
        }
    }
`;
