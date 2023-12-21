const inputElements = document.getElementsByTagName("input");
const alerts = document.getElementById("alert");
let checkedInputs = [];
let checkedItemsFound = false;

Array.from(document.getElementsByTagName("input")).forEach((element) => {
  var isChecked = element.hasAttribute("checked");
  if (isChecked) {
    checkedInputs.push(element);
     checkedItemsFound = true;
  }
});

console.log(checkedInputs);

if(checkedItemsFound===true){
 alert("Alert: Pre-Checked items found on this website.");
}

alerts.textContent = "Pre-Checked items found on this website.";