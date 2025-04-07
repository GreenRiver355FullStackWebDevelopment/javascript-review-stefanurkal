import { calculateStarAverage } from "./logic.js";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
const displayReviews = document.querySelector(".reviews");

//1. Create a function that will render a review.
//- The structure of the review should follow the example below.
//- Pay attention to the class names, as they are important for CSS styling to be applied correctly.
function renderReviews(review) {

  //create elements for the review based on the example in the read me
  const container = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const username = document.createElement("p");
  const rating = document.createElement("p");
  const userReview = document.createElement("p");

  //get information from review object
  username.textContent = review.username;
  rating.textContent = review.star;
  userReview.textContent = review.review;
  img.src = review.image;
  container.className = "review_container";
  
  //interact with the DOM
  info.appendChild(username);
  info.appendChild(rating);
  info.appendChild(userReview);
  container.appendChild(img);
  container.appendChild(info);

  displayReviews.appendChild(container);
}

//Use .forEach to iterate through the reviews.
//Pass a callback to .forEach that renders each review.

reviews.forEach(renderReviews);

const starDisplay = document.querySelector(".starRating");
//3. Calculate and Render Average Star
function starRating() {
  const starAvg = calculateStarAverage(reviews);

  console.log(starAvg);

  starDisplay.textContent = `Star Rating: ${starAvg}`;
}
starRating()

//- Select the form from the DOM.
const form = document.querySelector("form");

//- Add an event listener to the form for the submit event.
form.addEventListener("submit", function(event) {
  //- Don't forget e.preventDefault()
  event.preventDefault();

  
  const newReview = {
    username: document.getElementById("username").value,
    image: document.getElementById("image").value,
    star: parseInt(document.getElementById("star").value),
    review: document.getElementById("review").value
  };

  console.log(newReview);
  reviews.push(newReview);

  // Use the above method to render the new review
  renderReviews(newReview);

  // On submit, the form should render a new review to the screen and add it to the existing reviews array.
  starRating();

});