import { Context } from "./util";
import { DigitalHumaniApi } from "./dataSources";
import { ApolloServer } from 'apollo-server-lambda';
import { resolvers, typeDefs } from './resolver';

const dataSources = (): Context['dataSources'] => {
    return {
        digitalHumaniApi: new DigitalHumaniApi(),
    };
};

const apolloServer = new ApolloServer({
    typeDefs, resolvers, dataSources,
});

exports.gqlHandler = apolloServer.createHandler();
