// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like_glyphs = document.getElementsByClassName('like-glyph');

for (let i = 0; i < like_glyphs.length; i++) {
  like_glyphs[i].addEventListener("click", (event) => {
    event.preventDefault();
    mimicServerCall()
    .then((response) => {
      console.log(event.target)
      if(event.target.innerHTML == FULL_HEART) {
        event.target.innerHTML = EMPTY_HEART
        event.target.className = ""
      }
      else {
        event.target.innerHTML = FULL_HEART
        event.target.className = "activated-heart"
      }
    })
    .catch(err => {
      document.getElementById("modal").className = ""
      setTimeout(() => {
        document.getElementById("modal").className = "hidden"
      }, 3000);
    })
  });
}


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
