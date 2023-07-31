import express from 'express'
import { ApolloServer, gql} from 'apollo-server-express'
const app = express()
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => {
        // Do stuff with context
    }
})

await apolloServer.start()
apolloServer.applyMiddleware({ app, path: '/graphql' })



app.get('/', (req, res) => {
    res.send('Hello World !')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Express running on http://localhost:${port}/ ...`))