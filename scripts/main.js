var inputArr = ['Arvind Shokal.', 'a Frontend Developer.', 'feeling good today.'];
var element  = document.getElementById('typewriter');
var i = 0,
    j = 0,
    text,
    nId;

//On load function run for typewriter effect
(function typewriter() {
    nId = setInterval(type, 250);
}());

//Wait before erasing current string
function waitBeforeErase(){
  nId = setInterval(unType, 120);
  i = 0;
}

//Type the strings
function type(){
  text = inputArr[j].slice(0, ++i);

  if (text === inputArr[j]) {
    clearInterval(nId);
    setTimeout(waitBeforeErase, 2500);
  };

  element.textContent = text;
};

//Remove the typed string
function unType() {
  text = inputArr[j].slice(0, --i);
  element.textContent = text;

  if(text === '') {
    if(j === inputArr.length -1) {
      j =0;
    } else {
      j++;
    }
    clearInterval(nId);
    i = 0;
    nId = setInterval(type, 500);
  }

}
