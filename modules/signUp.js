import axios from 'axios';


async function SignUp(newUser){
console.log("running")
  try{
    const response = await axios.post("https://nhl-winners.onrender.com/user/signup", newUser)
    console.log(response.data)
  }catch(err){
    console.error(err)
  }
}

export {SignUp}