// // Jeshma Bhavana Aditi
// const DOMPurify = require('dompurify');
// const userMessages = [];

// const userMessageForm = document.querySelector('form');
// const userMessagesList = document.querySelector('ul');

// function renderMessages() {
//   let messageItems = '';
//   for (const message of userMessages) {
//     messageItems = `
//       ${messageItems}
//       <li class="message-item">
//         <div class="message-image">
//           <img src="${message.image}" alt="${message.text}">
//         </div>
//         <p>${message.text}</p>
//       </li>
//     `;
//   }

//   userMessagesList.innerHTML = messageItems;
// }

// function formSubmitHandler(event) {
//   event.preventDefault();
//   const userMessageInput = event.target.querySelector('textarea');
//   const messageImageInput = event.target.querySelector('input');
//   const userMessage = userMessageInput.value;
//   const imageUrl = messageImageInput.value;

//   if (
//     !userMessage ||
//     !imageUrl ||
//     userMessage.trim().length === 0 ||
//     imageUrl.trim().length === 0
//   ) {
//     alert('Please insert a valid message and image.');
//     return;
//   }

//   userMessages.push({
//     text: userMessage,
//     image: imageUrl,
//   });

//   userMessageInput.value = '';
//   messageImageInput.value = '';

//   renderMessages();
// }

// userMessageForm.addEventListener('submit', formSubmitHandler);



// const userCredentials = [];

// const userForm = document.querySelector('form');
// const resultSection = document.querySelector('#result');

// function formSubmitHandler(event) {
//   event.preventDefault();
//   const usernameInput = event.target.querySelector('#username');
//   const passwordInput = event.target.querySelector('#password');

//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   if (!username) {
//     alert('Please provide a username.');
//     return;
//   }

//   if (!password) {
//     alert('Error: Password is required.');
//     return;
//   }

//   // Add the data to the database
//   userCredentials.push({
//     username: username,
//     password: password,
//   });

//   usernameInput.value = '';
//   passwordInput.value = '';

//   resultSection.textContent = 'User found!';
//   resultSection.style.display = 'block';
// }

// userForm.addEventListener('submit', formSubmitHandler);




// Jeshma Bhavana Aditi
const userCredentials = [];

const userForm = document.querySelector('form');
const resultSection = document.querySelector('#result');

function formSubmitHandler(event) {
  event.preventDefault();
  const usernameInput = event.target.querySelector('#username');
  const passwordInput = event.target.querySelector('#password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username) {
    alert('Please provide a username.');
    return;
  }

  if (!password) {
    alert('Error: Password is required.');
    return;
  }

  // Sanitize the input using DOMPurify
  const sanitizedUsername = DOMPurify.sanitize(username);
  const sanitizedPassword = DOMPurify.sanitize(password);

  // Use prepared statements or parameterized queries to interact with the database
  // Example code using a database library or API
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  const values = [sanitizedUsername, sanitizedPassword];
  
  // Execute the query with the sanitized values
  // db.query(query, values); // Replace this line with the actual code for executing the query

  usernameInput.value = '';
  passwordInput.value = '';

  resultSection.textContent = 'User found!';
  resultSection.style.display = 'block';
}

userForm.addEventListener('submit', formSubmitHandler);
