//login part
const form = document.querySelector("form");
const loginError = document.querySelector(".login");


form.addEventListener("submit",async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  const signupData = { email , password };
  const userInfo = JSON.stringify(signupData);
  
  try{
  const createUserReq = await fetch("/login", { method: "POST", headers: {"Content-Type": "application/json"}, body: userInfo});
  const jsonRes = await createUserReq.json();
  console.log(jsonRes)
  if (jsonRes.error){ 
   loginError.textContent = jsonRes.error
   }
  if(jsonRes.data){
    location.assign('/')
  }
}
  catch(err){
    console.log(err)
  }
   
});
