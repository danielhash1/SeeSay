// // page loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(function() {
    loader.classList.add('loader--hidden');
  }, 1000);


  // loader removing, AND I don't really need it
  
  // setTimeout(function() {
  //   document.body.removeChild(loader);
  // }, 2500)
});

const modal1 = document.getElementById('modal-container-join');
const modal2 = document.getElementById('modal-container-create');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const closeModal1 = document.getElementById('close-modal1-id');
const closeModal2 = document.getElementById('close-modal2-id');

// open and close window
btn1.addEventListener('click', function() {
    modal1.style.display = "block";
});

btn2.addEventListener('click', function() {
    modal2.style.display = "block";
});

closeModal1.addEventListener('click', function() {
    modal1.style.display = "none";
});

closeModal2.addEventListener('click', function() {
  modal2.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }


// 
// Join form
// 

const formJoin = document.querySelector('#form-join');
const loader = document.querySelector('.loader');

formJoin.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const username = document.querySelector('#username-join-id').value;
  const roomCode = document.querySelector('#username-room-id').value;


  console.log('User is joining...')
  console.log('username:', username);
  console.log('room:', roomCode);

  const formData = {
    username: username,
    roomcode: roomCode
  }

  localStorage.setItem('user-data-join', JSON.stringify(formData));

  // redirect
  window.location.href = "room-page.html";

});


// 
// Create form
// 

const formCreate = document.querySelector('#form-create');

formCreate.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const username = document.querySelector('#username-create-id').value;
  const roomName = document.querySelector('#room-name-id').value;
  const roomCode = document.querySelector('#room-code-id').value;

  const formData = {
    username: username,
    roomname: roomName,
    roomcode: roomCode 
  };

  localStorage.setItem('user-data-create', JSON.stringify(formData));

  console.log('The room was created!');

  window.location.href = 'room-page.html';
  // redirect
});

// // page loader


// Redirect