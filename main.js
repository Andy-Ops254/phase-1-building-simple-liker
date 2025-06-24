// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const eModal =document.getElementById('modal')
eModal.classList.add('hidden') //classList.add() lets you work with css elements in javascript

const likes = document.getElementsByClassName('like-glyph');
Array.from(likes).forEach(like =>{// the method Array.from() converts a list of items to objects
  like.addEventListener('click', handleClick)
});

function handleClick(event) {
  const heart= event.target;
  if(heart.classList.contains('activated-heart')) {
    unlikeHeart(heart)
  }
  else{
    likeHeart(heart)
  }
}

function likeHeart(heart) {
  mimicServerCall()
  .then(()=> {
    heart.textContent=FULL_HEART;
    heart.classList.add('activated-heart'); //this method,adds class to the element
  })
  .catch (() => {
    eModal.classList.remove('hidden'); //this method, removes class to the element
    setTimeout(() => eModal.classList.add('hidden'),2000);
  });
};

function unlikeHeart(heart) {
  mimicServerCall()
  .then(()=> {
    heart.textContent=EMPTY_HEART;
    heart.classList.remove('activated-heart');
  })
  .catch (() => {
    eModal.classList.remove('hidden');
    setTimeout(() => eModal.classList.add('hidden'),2000);
  });
} //classList.contains('class-name')checks if the element has a specific class.




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
