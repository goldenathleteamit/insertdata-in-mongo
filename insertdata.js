const dbConnect=require('./connectionfile');

const insert =async()=>{
    const db= await dbConnect();
    const result = await db.insertOne({
        name:'amit',brand:'jz',price:10
    });
    if(result.acknowledged){
        console.log("data inserted");
    }
}
insert();