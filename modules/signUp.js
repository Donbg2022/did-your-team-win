import axios from 'axios';


async function SignUp(newUser){
console.log("running")
  try{
    const response = await axios.post("https://whowon.netlify.app/user/signup", newUser)
    console.log(response.data)
  }catch(err){
    console.error(err)
  }
}

export {SignUp}