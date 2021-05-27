const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const UserApi = require('./src/datasources/users-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            userApi: new UserApi()
        };
    },
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});