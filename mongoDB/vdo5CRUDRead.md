# read data

db.demo.find()

db.demo.find().pretty()

# read data with condition

db.demo.find({name: "mysql"})

# read data with condition & get n fields

db.demo.find({name: "mysql"}, {_id:0, name:1})

db.demo.find({active: true}).limit(1)

db.demo.findOne({active: true})

db.demo.find({active: true}).limit(1).skip(1)

