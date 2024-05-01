const mongoose=require("mongoose")
const mongoURL=process.env.MONGO_URL;
mongoose.set('strictQuery',true)
const mongoDB=async()=>{
    await mongoose.connect(mongoURL,async(err,result)=>{
        if(err){
            console.log("...",err);

        }
        else{
            console.log("connected to database");
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory=await mongoose.connection.db.collection("foodCategory")
                foodCategory.find({}).toArray(function(err,catData){
                    if(err){
                        console.log(err)
                    }
                    else{
                        global.food_items=data
                        global.foodCategory=catData;
                    }
                })
            })
        }
    })
}

module.exports=mongoDB