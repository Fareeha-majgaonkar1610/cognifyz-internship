function changeColor() {

    var colors = ["lightblue", "black", "lavender", "green", "lightyellow", "lightpink"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    // Math.random() * colors.length:- Multiplies the random decimal by 6 (array length) 
    // and return any colour as the background 

    // Math.floor:- converts the random math value into a whole number.

    document.body.style.backgroundColor = colors[randomIndex];
}

// Task 5: Fetch data from API
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") //     fetch() is a JavaScript function that sends an HTTP request to a URL and returns a Promise (something that will give you data in the future).
                                                                // The URL here is an API endpoint that gives fake blog posts in JSON format.
                                                                // ?_limit=5 means "only give me the first 5 posts" instead of all 100.


// Convert the Response to JSON:-
.then(function(response) {                                     //.then() waits until the fetch request is done and then runs the function inside.
                                                               // response.json() takes the raw HTTP response and parses it into a JavaScript object/array we can use
    return response.json(); 
})                                                             
                                                               

// Work with the Data:-
.then(function(data) {
    var output = document.getElementById("getApidata");      //document.getElementById("apiData") finds the <div> in your HTML where you want to put the data.
    output.innerHTML = "";                                //output.innerHTML = "" clears any old results before adding new ones.
    data.forEach(function(post) {                         //data.forEach(...) loops through each post in the array:
        var p = document.createElement("p");              //document.createElement("p") :- creates a <p> element.             
        p.textContent = post.title;                       //p.textContent = post.title :- puts the post title as the text inside <p>.
        output.appendChild(p);                            //output.appendChild(p) :- adds the <p> element into the <div> so it shows on the page.
    });
})

// If any error occurs:-
.catch(function(error) {
    console.log("Error fetching data:", error);
});
}



/// Task 6 :- Form validation + confirmation before submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop immediate form submission
    let valid = true;

    // Clear old errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters";
        valid = false;
    }

    // If validation fails, stop submission
    if (!valid) {
        return;
    }

    // Ask for confirmation
    let confirmSubmit = confirm("Are you sure you want to submit the form?");
    if (confirmSubmit) {
        alert("Form submitted successfully!");
        this.submit(); // actually submit the form
    } else {
        alert("Form submission cancelled.");
    }
});

