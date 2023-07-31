import {gql} from 'apollo-server-express'

export default gql`
    type Query {
        user: User
    }
    
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        age: Int
        job: Job
    }
    
    enum Job {
        developer
        designer
        receptionist
    }
    
    type Post {
        id: ID
        title: String
        description: String
        price: Int
        author: User
    }
`