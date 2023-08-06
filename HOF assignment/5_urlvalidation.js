// 5. URL validation.
// Write a program using a regex that matches valid URLs.Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.


function isValidURL(input) {
    const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;

    if (urlRegex.test(input)) {
        console.log('The URL is valid.');
    } else {
        console.log('The URL is not valid.');
    }
}


isValidURL('http://www.example.com');
isValidURL('https://www.example.com');
isValidURL('http://example.com');
isValidURL('https://example.com');

isValidURL('https://www.example.com/path?query=hello');
isValidURL('ftp://example.com');
isValidURL('www.example.com'); 