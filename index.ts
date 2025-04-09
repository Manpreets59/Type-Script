// interfaces vs types 
// create two types called user and Admin
// create a function that take either a user or an admin as an input and return string saying "Welcome , [name]".

interface Admin{
  name : string;
  permisions : string;
}

interface User{
  name : string;
  age : number;

type userOrAdmin = User | Admin}

function greet(user: userOrAdmin){
  console.log()
}