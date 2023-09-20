
//the Sign up part   

const form = document.querySelector("form");
const emailError = document.querySelector(".email");
const passwordError = document.querySelector(".password");
const usernameError = document.querySelector(".username");

emailError.textContent = ""
passwordError.textContent = ""
usernameError.textContent = ""


form.addEventListener("submit",async (e) => {
  e.preventDefault();

  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  const signupData = { email, username, password };
  const userInfo = JSON.stringify(signupData);
  
  try{
  const createUserReq = await fetch("/signup", { method: "POST", headers: {"Content-Type": "application/json"}, body: userInfo});
  const jsonRes = await createUserReq.json();
  console.log(jsonRes)
  if (jsonRes.errors){
    emailError.textContent = jsonRes.errors.email
    passwordError.textContent = jsonRes.errors.password
    usernameError.textContent = jsonRes.errors.username
  }
  if(jsonRes.user){
    location.assign('/')
  }
}
  catch(err){
    console.log(err)
  }
   
});
