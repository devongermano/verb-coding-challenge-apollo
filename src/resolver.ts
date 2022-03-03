import { gql } from 'apollo-server';
import { IResolvers } from '@graphql-tools/utils';

export const typeDefs = gql`
    
    type Project {
        id: ID,
        name: String
        reforestationProjectDescription_en: String
        reforestationProjectState_en: String
        reforestationProjectCountry_en: String
        reforestationProjectWebsite_en: String
        reforestationCompanyName_en: String
    }

    type ProjectDetails {
        created: String
        updated: String
        id: ID
        name: String
        description: String
        reforestationCompanyName_en: String
        reforestationCompanyAddress_en: String
        reforestationCompanyWebsite_en: String
        reforestationProjectCountry_en: String
        reforestationProjectDescription_en: String
        reforestationProjectImageURL_en: String
        reforestationProjectState_en: String
        reforestationProjectWebsite_en: String
    }
    
    type Tree {
        projectId: String
        created: String
        uuid: String
        user: String
        treeCount: Int,
        enterpriseId: String
    }
    
    type Query {
        project(id: String!): ProjectDetails
        allProjects: [Project]
        searchProjects(substring: String!): [Project]
        tree(uuid: ID!): Tree
    }
    
    type Mutation {
        plantTree(enterpriseId: String!, projectId: String!, user: String!, treeCount: Int!): Tree
    }
`;

export const resolvers: IResolvers = {
    Query: {
        project: (_, args, context) => context.dataSources.digitalHumaniApi.getProject(args['id']),
        allProjects: (_, args, context) => context.dataSources.digitalHumaniApi.getProjects(),
        searchProjects: (_, args, context) => context.dataSources.digitalHumaniApi.searchProjects(args),

    },
    Mutation: {
        plantTree: (_, args, context) => context.dataSources.digitalHumaniApi.plantTree(args['enterpriseId'], args['projectId'], args['user'], args['treeCount']),
    }
};
