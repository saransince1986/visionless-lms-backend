#Bencaleth LMS Backend
Backend API for the bencaleth LMS
##Setting up the DB
This backend uses a postgress DB. If you are running it for the fisrt time you first will need to create a `sequelize.js` configuration file, you will find a sample file in the dir `src/config/sequelize.js.sample`. Once you have created your sequelize file you can now create the database using 
```bash
sequelize db:create --config=src/config/sequelize.json
```