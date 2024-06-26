import {gql} from '@apollo/client';

/** ORDERS gql query to retrieve all orders ranking */
export const LEADERBOARD = gql`
    query Leaderboard{
        leaderboard{
            id
            make{
                name
            }
            model{
                modelName
            }
            totalTrees
        }
    }
`;

/** MAKES gql query to retrieve all vehicle makes */
export const MAKES = gql`
    query GetMakes {
        makes{
            id
            name
            originCountry
        }
    }
`;

/** MY_VEHICLES gql query to retrieve all user vehicles */
export const MY_VEHICLES = gql`
    query GetMyVehicles {
        myVehicles{
            id
            mileage
            fkUserId
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


/** TREES gql query to retrieve available trees */
export const TREES = gql`
    query GetAvailableTrees {
        trees{
            id
            species
            age
            unitPrice
        }
    }
`;



