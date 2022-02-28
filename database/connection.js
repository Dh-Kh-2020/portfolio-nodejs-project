const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongoDB connection
        const con = await mongoose.connect(process.env.MONGO_URI)
        // const con = await mongoose.connect('mongodb://localhost:27017/personalPortfolio');
        // , {
        //     useNewUrlParser: true,  
            // useUnifiedTopology: true,  
        //     useFindAndModify: false, 
        //     useCreateIndex: true
        // }

        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;