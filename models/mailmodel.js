import { Schema,model} from "mongoose";

const schema = new Schema({
    Email: {
        type: String,
        required: true,
        unique:true
    }
});

const Mail = model('Email', schema);

export default Mail;
