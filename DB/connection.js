const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch(err) {
        console.log(`Connection Error Occured: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/portfolios")
//     .then(() => { console.log("Connected to Database") })
//     .catch((err) => { console.log(` Error Occured >>>> ${err}`) });

// module.exports = mongoose;