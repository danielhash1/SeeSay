// Getting user data from localStorage
const userData = localStorage.getItem('user-data-create');
const userDataJSON = JSON.parse(userData);

const username = userDataJSON['username'];
const roomName = userDataJSON['roomname'];
const rommCode = userDataJSON['roomcode'];



document.title = roomName + ' Room';

// camera access


let localCamera; 
let remoteCamera;
let peerConnection;

// const servers =


let init = async () => {
    localCamera = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false 
    })
    
    document.getElementById('user-1').srcObject = localCamera;

    createOffer();
}

let createOffer = async () => {
    peerConnection = new RTCPeerConnection();

    remoteCamera = new MediaStream();
    document.getElementById('user-2').srcObject = remoteCamera;

    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    console.log('Offer:', offer);
};

init()

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    setTimeout(function() {
      loader.classList.add('loader--hidden');
    }, 2500);
  });

