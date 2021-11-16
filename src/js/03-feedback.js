import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

const email = document.querySelector('[name="email"]');

const comment = document.querySelector('[name="message"]');

const formData = {};

const STORAGE_KEY = "feedback-form-state";

const onInput = function (event) {
    formData[email.name] = email.value;
    formData[comment.name] = comment.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
const onSubmit = function (event) {
    event.preventDefault();
    event.target.reset();
    localStorage.clear();
    console.log(JSON.stringify(formData));
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

function localStorageTest() {
    if (savedData) {
        comment.value = savedData.message;
        email.value = savedData.email;
    };
    return;
}
localStorageTest();
form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

