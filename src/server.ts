import { Context } from "./util";
import { ProjectProvider, TreeProvider } from "./providers";
import { ApolloServer } from 'apollo-server-lambda';
import { resolvers, typeDefs } from './resolver';



const dataSources = (): Context['dataSources'] => {
    return {
        projectProvider: new ProjectProvider(),
        treeProvider: new TreeProvider(),
    };
};

const apolloServer = new ApolloServer({
    typeDefs, resolvers, dataSources,
});

exports.gqlHandler = apolloServer.createHandler();
