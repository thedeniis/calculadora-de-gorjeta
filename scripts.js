function calculateTip(event){
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let servicequal = document.getElementById('servicequal').value;
  let numofpeople = document.getElementById('people').value;

  if(bill == '' | servicequal == 0){
      alert("Por favor, preencha todos os campos.")
      return;
  }

  if(numofpeople == "" | numofpeople <= 1){
     numofpeople = 1;
     document.getElementById('each').style.display = "none"
  } else {
     document.getElementById('each').style.display = "block"
  }

  let total = (bill * servicequal) / numofpeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);