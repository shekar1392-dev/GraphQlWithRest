const { gql } =require('apollo-server');

const typeDefs = gql`
type Query {
    users:[User!]!
    user(id:Int):User
    addUser:User
}


    
type User {
    id:ID!
    name:String!
}
`;


module.exports= typeDefs;

