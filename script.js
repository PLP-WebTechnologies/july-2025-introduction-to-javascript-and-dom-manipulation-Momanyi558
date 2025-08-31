// ===============================
// Part 1: Basics (Variables + Conditionals)
// ===============================
function greetUser() {
  let name = document.getElementById("userName").value;

  // Conditional logic
  if (name.trim() === "") {
    document.getElementById("greeting").textContent = "Please enter your name!";
  } else {
    document.getElementById("greeting").textContent = `Hello, ${name}! 👋`;
  }
}

// ===============================
// Part 2: Functions (Reusable Logic)
// ===============================
function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let total = addNumbers(num1, num2);
  document.getElementById("sumResult").textContent = `Sum = ${total}`;
}

// ===============================
// Part 3: Loops (for, while)
// ===============================
function countDown() {
  let list = document.getElementById("countList");
  list.innerHTML = ""; // clear old results

  // Example: for loop countdown
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // Extra: while loop example (console only)
  let x = 1;
  while (x <= 3) {
    console.log(`Loop number: ${x}`);
    x++;
  }
}

// ===============================
// Part 4: DOM Manipulation
// ===============================
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  text.classList.toggle("colorToggle"); // toggle class
});

// Dynamically add new list items
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(li);
});
