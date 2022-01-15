# see dbs

show dbs

# create db / switch to db

use demo

# create collecton 

db.demo.insertOne({name: "reactjs", type: "frontend", videos: 80, active: true})

# check active db

db

# check db collections 

show collections

# check collection documents 

db.demo.find()

# readable view 

.pretty()

db.demo.find()
