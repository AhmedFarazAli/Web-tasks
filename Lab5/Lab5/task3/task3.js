const table = document.getElementById("table");
const power = document.getElementById("power");
const seq = document.getElementById("seq");
const oddEven = document.getElementById("oddEven");

table.addEventListener("click", (e) => {
  const input = parseInt(prompt("Enter a Number"));
  if (input) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
      output += `${input} x ${i} = ${input * i}\n`;
    }
    alert(output);
  } else {
    alert("Invalid Input");
  }
});

power.addEventListener("click", (e) => {
  const input = parseInt(prompt("Enter any number"));
  if (input) {
    const power = parseInt(prompt("Enter Power"));
    if (power) {
      alert(`Power ${power} of Number ${input} is : ${input ** power}`);
    } else {
      alert("Invalid Input");
    }
  } else {
    alert("Invalid Input");
  }
});

seq.addEventListener("click", (e) => {
  const input =+prompt("Enter Limit");
  if (input) {
    let output = "";
    for (let i = 0; i <= input; i++) {
      output += `${i} ${i !== input ? "," : ""}`;
    }
    alert(output);
  } else {
    alert("Invalid Input");
  }
});

oddEven.addEventListener("click", (e) => {
  const input = prompt("Enter E for Even or O for Odd");
  switch (input.toUpperCase().trim()) {
    case "E":
      let output1 = "";
      for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
          output1 += `${i} ,`;
        }
      }
      alert(output1);
      break;
    case "O":
      let output2 = "";
      for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
          output2 += `${i} ,`;
        }
      }
      alert(output2);
      break;
    default:
      alert("Invalid Input");
      break;
  }
});