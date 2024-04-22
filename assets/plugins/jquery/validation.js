
function userlogin(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "ankesh12@gmail.com" && form.usrpsw.value == "")
  {
    window.open('index.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("your user name or password is wrong")/*displays error message*/
  }
}