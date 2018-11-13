1. Download mongodb from mongodb.com and extract it then move it to user folder
2. Create folder name `mongo-data` to store database
3. Change to directory `users\mongo\bin\` 
4. Run mongo server by `./mongod --dbpath ~/mongo-data
    a. Testing Mongo:
        - Run mongo command line by `./mongo`
        - Run `db.Todos.insert({text: 'This is a test text'})` //insert record to database
        - Run `db.Todos.find()` // Select record from the database
5. Install Robomongo for GUI mongo management
    get it from robomongo.org

/// ------------------------

TODO APP
--------

1. Install mongodb by `npm install mongodb --save`
2. Install mongoose by `npm i mongoose --save`
3. Install express by `npm i express --save`
4. Install body-parser `npm i body-parser --save`
5. Install test libraries `npm i expect mocha nodemon supertest --save-dev`