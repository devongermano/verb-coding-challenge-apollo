import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../util';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  plantTree: Tree;
};


export type MutationPlantTreeArgs = {
  enterpriseId: Scalars['String'];
  projectId: Scalars['String'];
  treeCount: Scalars['Int'];
  user: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  reforestationCompanyName_en: Scalars['String'];
  reforestationProjectCountry_en: Scalars['String'];
  reforestationProjectDescription_en: Scalars['String'];
  reforestationProjectState_en: Scalars['String'];
  reforestationProjectWebsite_en: Scalars['String'];
};

export type ProjectDetails = {
  __typename?: 'ProjectDetails';
  created: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  reforestationCompanyAddress_en: Scalars['String'];
  reforestationCompanyName_en: Scalars['String'];
  reforestationCompanyWebsite_en: Scalars['String'];
  reforestationProjectCountry_en: Scalars['String'];
  reforestationProjectDescription_en: Scalars['String'];
  reforestationProjectImageURL_en: Scalars['String'];
  reforestationProjectState_en: Scalars['String'];
  reforestationProjectWebsite_en: Scalars['String'];
  updated: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allProjects?: Maybe<Array<Maybe<Project>>>;
  project?: Maybe<ProjectDetails>;
  searchProjects?: Maybe<Array<Maybe<Project>>>;
  tree?: Maybe<Tree>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySearchProjectsArgs = {
  substring: Scalars['String'];
};


export type QueryTreeArgs = {
  uuid: Scalars['ID'];
};

export type Tree = {
  __typename?: 'Tree';
  created: Scalars['String'];
  enterpriseId: Scalars['String'];
  projectId: Scalars['String'];
  treeCount: Scalars['Int'];
  user: Scalars['String'];
  uuid: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  ProjectDetails: ResolverTypeWrapper<ProjectDetails>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tree: ResolverTypeWrapper<Tree>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Project: Project;
  ProjectDetails: ProjectDetails;
  Query: {};
  String: Scalars['String'];
  Tree: Tree;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  plantTree?: Resolver<ResolversTypes['Tree'], ParentType, ContextType, RequireFields<MutationPlantTreeArgs, 'enterpriseId' | 'projectId' | 'treeCount' | 'user'>>;
};

export type ProjectResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationCompanyName_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectCountry_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectDescription_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectState_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectWebsite_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDetailsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectDetails'] = ResolversParentTypes['ProjectDetails']> = {
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationCompanyAddress_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationCompanyName_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationCompanyWebsite_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectCountry_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectDescription_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectImageURL_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectState_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reforestationProjectWebsite_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allProjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['ProjectDetails']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  searchProjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType, RequireFields<QuerySearchProjectsArgs, 'substring'>>;
  tree?: Resolver<Maybe<ResolversTypes['Tree']>, ParentType, ContextType, RequireFields<QueryTreeArgs, 'uuid'>>;
};

export type TreeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Tree'] = ResolversParentTypes['Tree']> = {
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enterpriseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectDetails?: ProjectDetailsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tree?: TreeResolvers<ContextType>;
};

