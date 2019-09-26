import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String
    }
}); 

export default mongoose.model('task', TaskSchema); 