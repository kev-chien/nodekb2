//Based on tutorial https://www.youtube.com/watch?v=lAUncPg_FVw&index=6&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp
// Node.js & Express From Scratch [Parts 1~12]
// Shows how to set up server with express and node.js, 
// How to make html-like pages to view
// How to make get, post, delete requests
// How to read data from db onto the page, how to write data from form into the db

// how to install on windows is also walked through in Parts 1~2 of NodeJS and Express from Scratch by Traversy Media
// https://www.youtube.com/watch?v=k_0ZzvHbNBQ&t=0s&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp&index=2

//start the server
$npm install
$node app

// Go to browser localhost:3000/
// Go to localhost:3000/quizzes/add   to see how the form is working for adding quizzes

// node.js , express
// mongoDB with ORM mongoose
//files for the html-like files are in views   using EJS, which is like html and php to get data from the database


For MongoDB
>cd c:\mongodb\bin
> mongo     //to run the shell
> show dbs
>use nodeqb    //this is a database
> db.users.find().pretty()   //There will be 4 table/collections in the database: quizzes, users, questions, scores