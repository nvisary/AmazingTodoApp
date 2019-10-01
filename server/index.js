import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import mongoose from 'mongoose';
import path from 'path'; 
import schema from './schema/schema';

import graphQlSchema from './graphql/schema'; 
import graphQlResolvers from './graphql/resolvers'; 

const app = express();
const PORT = 3000;

app.use(cors(), bodyParser.json()); 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo_db');

app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

app.use(express.static(path.resolve(__dirname, './../public')));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});