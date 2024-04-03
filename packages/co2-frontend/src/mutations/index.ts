import {gql} from '@apollo/client';

/** SIGNINUSER gql mutation to sign in a user */
export const SIGNINUSER = gql`
    mutation SignInMutation($signInInput: SignInInput!) {
        signIn(signInInput: $signInInput){
            token
            user{
                id
                firstName
                lastName
                email
                userRole
            }
        }
    }
`;

/** CREATEUSER gql mutation to create a user */
export const CREATEUSER = gql`
    mutation CreateUser($userInput: CreateUserInput!) {
        createUser(userInput: $userInput) {
            token
            user{
                id
                firstName
                lastName
                email
                userRole
            }
        }
    }
`;


/** VEHICLES_BY_USER_ID gql mutation to retrieve all vehicles for current user */
export const VEHICLES_BY_USER_ID = gql`
    mutation GetVehiclesForUser($fkUserId: ID!) {
        vehiclesByUserId(fkUserId: $fkUserId){
            id
            make{
                id
                name
            }
            model{
                id
                modelName,
                mttRatio
            }
        }
    }
`;