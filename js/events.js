// Task 1: Like Button
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `Likes: ${likes}`;
});

resetBtn.addEventListener("click", () => {
  likes = 0;
  likeCount.textContent = "Likes: 0";
});

// Task 2: Greeter
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  greetMsg.textContent = name ? `Hello, ${name}!`: "Please enter your name first.";
  
  nameInput.value = "";
  nameInput.focus();
});

// Task 3: Live Mirror
liveInput.addEventListener("input", () => {
  const text = liveInput.value;

  liveOutput.textContent = text || "Waiting...";
  liveOutput.classList.toggle("long", text.length > 20);
});

// Task 4: Key Logger
keyInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    keyInput.value = "";
    keyLog.textContent = "";
    return;
  }

  const keys = [];

  if (e.ctrlKey) keys.push("Ctrl");
  if (e.shiftKey) keys.push("Shift");
  if (e.altKey) keys.push("Alt");

  keys.push(e.key);

  keyLog.textContent = keys.join(" + ");
});

// Task 5: Task Delegator
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration =
      e.target.style.textDecoration === "line-through" ? "none" : "line-through";
  }
});

taskList.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

// Task 6: Smart Form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.emailInput.value.trim();
  const subject = form.subjectInput.value.trim();

  if (!email || !subject) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = `Message sent to ${email}!`;
  formStatus.style.color = "green";

  form.emailInput.value = "";
  form.subjectInput.value = "";
});