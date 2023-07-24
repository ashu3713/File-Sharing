import mongoose from 'mongoose';

const DBConnection = async() => {
    const MONGODB_URL=`mongodb+srv://ashu:ashu@file-sharing.9ts8yd0.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONGODB_URL,{useNewUrlParser: true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('error while connecting the database',error.message);
    }
}

export default DBConnection;