let editButton = document.querySelector(".edit");
let deleteButton = document.querySelector(".delete");
let nameText = document.querySelector(".name");
let titleText = document.querySelector(".title");
let commentText = document.querySelector(".comment");
let saveButton = document.querySelector(".save");
let displayCommentElement = document.querySelectorAll(".x");
let displayCommentElement2 = document.querySelectorAll(".y");
let newNameText = document.querySelector(".new-name");
let newTitleText = document.querySelector(".new-title");
let newCommentText = document.querySelector(".new-comment");
let buttons = document.querySelectorAll("btn");
let date = new Date;
let day = date.getDate();
let month = date.getMonth() +1;
let fullDate = "Date: "+day +" / " + month;
let newDate = document.querySelector(".time").textContent = fullDate;




  deleteButton.addEventListener("click", ()=>{
    nameText.innerHTML = "" ;
      commentText.innerHTML = "";
       titleText.innerHTML ="";
       document.querySelectorAll(".grid1").forEach((el) =>el.style.display = "none")
       document.querySelector(".box1").innerHTML ="<span class ='no-comment2'>Rate us</span>"

    alert("The comment has been successfully deleted")
});


editButton.addEventListener("click", () =>{
  displayCommentElement2.forEach((el) =>el.style.display = "none")
  displayCommentElement.forEach((el) =>el.style.display = "block")
    
 
    
   
  saveButton.addEventListener("click", () =>{
    displayCommentElement2.forEach((el) =>el.style.display = "block")
  displayCommentElement.forEach((el) =>el.style.display = "none")
    nameText.textContent =newNameText.value;
    console.log(newNameText.value)
    commentText.textContent =newCommentText.value;
    titleText.textContent =newTitleText.value;
  }); 

});



