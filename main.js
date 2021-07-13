//for validation of login page

function login(){

    let username2= document.getElementById('username').value;
    let password2 = document.getElementById('password').value ;
    if (username2==null || username2=="" ){  
        alert("Username cant be blank ");  
        return false;  
      }else if(username2!="admin"){  
        alert("username must be admin only");  
        return false;  
        }  
      else if(password2.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
        }  

    else{
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = 'form.html';

    }

}  

// for inserting an image

window.addEventListener('load',function(){
    document.querySelector('input[type="file"]').addEventListener('change',function(){
        if(this.files && this.files[0]){
            var img = document.querySelector('img');
            img.src = URL.createObjectURL(this.files[0]);
            img.onload =imageIsLoaded;

        }

    });
});

function imageIsLoaded(e) {
   alert(e);
}

//for validation of form page

 function portfolio(){ 
    let name2= document.getElementById('name').value;
    let contact2= document.getElementById('contact').value ;
    let edu_exp2= document.getElementById('edu_exp').value;
    let work_exp2= document.getElementById('work_exp').value ;

    if (name2==null || name2==""){  
        alert(" Name can't be blank");  
        return false;  
      } 
      else if(contact2.length<10)
      {  
        alert("Enter your contact details");  
        return false;  
        }  

        else if(edu_exp2==null || edu_exp2=="")
      {  
        alert("Enter your Educational details");  
        return false;  
        }  

        else if(work_exp2==null || work_exp2=="")
      {  
        alert("Enter your work experience details");  
        return false;  
        } 

 else{ 
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let edu_exp = document.getElementById("edu_exp").value;
    let work_exp = document.getElementById("work_exp").value;
    let image = document.getElementById("image").value;

    localStorage.setItem('name', name);
    localStorage.setItem('contact', contact);
    localStorage.setItem('edu_exp', edu_exp);
    localStorage.setItem('work_exp', work_exp);
    localStorage.setItem("image", image)


    window.location.href = 'portfolio.html';
    }
 }
  
 // for showing an image on form page

 var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};

 //for declaring an image to portfolio page

 function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}



 function setInputFields(){
     debugger;
    let getName = JSON.parse(localStorage.getItem('name'));
    console.log(getName);
    document.getElementById("getName").value = getName;
     let contact = document.getElementById("getContact");
     let edu_exp = document.getElementById("getEdu_exp");
     let work_exp = document.getElementById("getWork_exp");
     let image = document.getElementById("getImage");
 }

 
  