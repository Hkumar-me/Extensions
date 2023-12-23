

window.addEventListener("load", ()=>{
  let arrayOfAllInputs = document.querySelectorAll("input");
  console.log( typeof arrayOfAllInputs);

  let preCheckedBoxes;
  let found;
  arrayOfAllInputs.forEach((element) =>{
      if(element.checked){
        found =true;
        preCheckedBoxes = document.querySelectorAll("input[checked]");
      }
      else{
        console.log("No preCheckedBoxes found");
      }
  })
  console.log(preCheckedBoxes);
  console.log(found);

  if(found){
    alert(preCheckedBoxes.length +" "+"PRE-CHECKED BOXES FOUND");
  }
}

)
