import { graphql } from "../../../gql";

export const ADD_USER_MUTATION = graphql(`
    mutation AddUser($input: AddUserInput!) {
        addUser(input: $input) {
            first_name
            last_name
            birthday
            gender
            reg_device {
                type
                value
            }
        }
    }
`);
