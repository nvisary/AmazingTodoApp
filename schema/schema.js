import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolvers';

const typeDefs = `

type Task {
    _id: ID!
    title: String!
    body: String
}

type Query {
    getTask(_id: ID!): Task 
    allTasks: [Task]
}

input TaskInput {
    title: String!
    body: String!
}

type Mutation {
    createTask(input: TaskInput): Task
    updateTask(_id: ID!, input: TaskInput): Task
    deleteTask(_id: ID!): Task
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema; 