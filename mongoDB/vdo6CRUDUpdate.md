# update data

db.demo.updateOne({name:"reactjs"}, {$set: {type:"fullstack"}})


db.demo.updateMany({type:"db"}, {$set: {active:false}})


