// Task 1
const title = document.getElementById("mainTitle");
const features = document.querySelectorAll(".feature");
const description = document.querySelector(".description");

console.log(title.textContent);
console.log(description.innerHTML);

// Task 2
title.textContent = "Welcome to the Dashboard";
description.innerHTML = "Your dashboard is ready. Explore the available features below.";
description.classList.remove("hidden");

// Task 3
title.classList.add("highlight");
description.classList.remove("hidden");

// Task 4
features.forEach(function (item) {
  if (item.textContent === "REMOVE ME") {
    item.remove();
  }
});

// Task 5
const heading = document.createElement("h2");
heading.textContent = "Available Features";

const featuresList = document.getElementById("features");
featuresList.before(heading);

// Task 6
const mainLink = document.getElementById("mainLink");

console.log(mainLink.getAttribute("href"));

mainLink.setAttribute("href", "https://example.com");
mainLink.textContent = "Go to Dashboard";