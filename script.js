let songNames = [
  "andree.mp4",
  "rhyder.mp4",
  "wres.mp4",

]
let singer = [
  "andree.png",
  "rhyder.png",
  "wres.png",
]
var index = 0;

function toggleCurtain() {
  const curtain = document.querySelector('.curtain');
  curtain.classList.add('opened-curstain');

  const letter = document.querySelector('.letter');
  letter.classList.add('fly-down');
}


function goto() {
  const letter = document.querySelector('.letter');
  letter.classList.add("animation-fly-out")
  
  // const domainExpand = document.querySelector('.domain-expand');
  // domainExpand.classList.remove('d-none');
  // domainExpand.play();

  setTimeout(function() {
    letter.classList.add("d-none")

    const word = document.querySelector('.word');
    word.classList.remove("d-none")
    wordflick();

    setTimeout(function() {
      word.classList.add("d-none") 
      
    }, 19000);

  }, 3000);
}

const videoElement = document.querySelector('.singer-song');
const singerElement = document.querySelector('.singer');

function play() {
  videoElement.play();

  if (!videoElement.paused){
    changeVideo();
  }

  videoElement.addEventListener("ended", function() {
    changeVideo();    
  });
}

function changeVideo(){
  index;
  if(index < songNames.length){
    videoElement.src = `./assets/${songNames[index]}`;
    singerElement.src = `./assets/${singer[index]}`
    videoElement.play();
  }
  index++;
}

var words = [
  'Khoan đã',
  'Chờ tớ một tí',
  'Tớ còn vài điều muốn nói với cậu', 
  'Cậu đã sẵn sàng chưa', 
  'Bây giờ mình bắt đầu nhé !!'
],

  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
      if (forwards) {
          if (offset >= words[i].length) {
              ++skip_count;
              if (skip_count == skip_delay) {
                  forwards = false;
                  skip_count = 0;
              }
          }
      }
      else {
          if (offset == 0) {
              forwards = true;
              i++;
              offset = 0;
              if (i >= len) {
                  i = 0;
              }
          }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
          if (forwards) {
              offset++;
          }
          else {
              offset--;
          }
      }
      document.querySelector('.word').textContent = part;
    }, speed);
};

