
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const special = "!@#$%^&*_-+=";

const minLength = document.getElementById('min-length').value
const maxLength = document.getElementById('max-length').value
const includeNum = document.getElementById('include-num').value
const includeSpec = document.getElementById('include-spec').value

const pwLength = (minLength, maxLength) => Math.floor(Math.random() * (max - min + 1)) + min

let password = ''
