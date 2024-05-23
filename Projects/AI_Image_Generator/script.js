let form = document.querySelector("form");
console.dir(form);
let handelFormSubmission = (e) => {
    e.preventDefault();
    console.dir(e);
    console.dir(e.elements);
    console.dir(e.srcElement)
}
form.addEventListener("submit", handelFormSubmission);