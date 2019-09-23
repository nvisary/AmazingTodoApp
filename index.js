import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import path from 'path'; 

import schema from './schema/schema';


const app = express();
const PORT = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo_db');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});