// pick, partial, readonly, Records and map, 

interface User{
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
type UpdatePropsOptional = Partial<UpdateProps>


function UpdateUser(UpdateProps: UpdatePropsOptional){
  //Hit the database tp under the user
}

UpdateUser({
  name:'asd',
  email: "123"
})

