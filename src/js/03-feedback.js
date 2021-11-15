import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

const email = document.querySelector('[name="email"]');

const comment = document.querySelector('[name="message"]');

const formData = {};

const STORAGE_KEY = "feedback-form-state";

const onInput = function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
const onSubmit = function (event) {
    event.preventDefault();
    email.value = "";
    comment.value = "";
    localStorage.removeItem(STORAGE_KEY);
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
    comment.value = savedData.message;
    email.value = savedData.email;
};
form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

