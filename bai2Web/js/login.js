// show eye

const input  = document.querySelector(".forgot-position input");
const eyeopen = document.querySelector('.eye-open');
const eyeclose = document.querySelector(".eye-close");
const eye_open = ()=>{
  eyeopen.classList.add("hiden");
  eyeclose.classList.remove("hiden");
  input.setAttribute("type","password");
  
}
eyeopen.addEventListener('click',eye_open);
eyeclose.addEventListener("click", function(){
    eyeopen.classList.remove("hiden");
    eyeclose.classList.add("hiden");
    input.setAttribute("type","text")
  
   
});

//show login signup create one
const forgot_password = document.querySelector(".forgot-password");
const account_recover = document.querySelector(".account-recover");
const account_list = document.querySelector(".account-list");
const backlogin = document.querySelector(".account-recover .account-center a");
const create_one = document.querySelector(".account-list .account-center a");
const signup = document.querySelector(".account-signup-list");

forgot_password.addEventListener("click",()=>{
    account_recover.classList.add("active");
    account_list.classList.add("active");
    
});
backlogin.addEventListener("click",()=>{
    account_recover.classList.remove("active");
    account_list.classList.remove("active");
});
create_one.addEventListener("click",()=>{
    account_list.classList.add("active");
    signup.classList.add("active");
    
});

