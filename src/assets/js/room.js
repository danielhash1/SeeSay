// Getting user data from localStorage
const userData = localStorage.getItem('user-data-create');
const userDataJSON = JSON.parse(userData);

const username = userDataJSON['username'];
const roomName = userDataJSON['roomname'];
const rommCode = userDataJSON['roomcode'];


document.title = roomName + ' Room';