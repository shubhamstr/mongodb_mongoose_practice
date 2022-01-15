# insert data

db.demo.insertOne({name: "mongo", type: "db", videos: 5, active: true})

db.demo.insertMany([{name: "mysql", type: "db", videos: 5, active: true},{name: "mssql", type: "db", videos: 5, active: true}])