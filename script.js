var score = '';

function add() {
  let score = document.getElementById("grade_input").value
  console.log("score inside add() is "+ score)

  function grade (x){
  console.log("score inside grade() is " + score)
  if (x <= 59) {
    alert("F for failure")
    return "F for fail"
  }
  else if (x <= 69) {
    alert("D for terrible")
    return "D for die"
  }
  else if (x <= 79) {
    alert ("C for questionable life choices")
    return "C for kill them all"
  }
  else if (x <= 89) {
    alert ("B for tolerable")
    return "B for survivable"
  }
  else {
    // alert ("WHY NO A+")
    return "A for lack of ambition"
  }
  }
console.log("value of score in nested section is " + score)
grade(score);

}

grade(score);
