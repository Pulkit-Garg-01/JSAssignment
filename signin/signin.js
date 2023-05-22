document.getElementById("button").addEventListener("click",signIn);
     function signIn(event){
        event.preventDefault();
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var data={
            email: email,
            password: password
          };
          fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json',
            },
           
          })  
          .then((response) => response.json())
  .then((json) => {console.log(json);
                  alert("Sign in Successful");})
  .catch(error=>console.log("Cannot fetch data"));


     }