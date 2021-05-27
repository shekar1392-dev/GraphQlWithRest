const resolvers={
    Query: {
        users: (_, __, {dataSources}) => {
            return dataSources.userApi.getAllUsers();
        },
        user:(_,{id},{dataSources})=>{
            return dataSources.userApi.getUserById(id);
        },

    },
};

module.exports = resolvers;