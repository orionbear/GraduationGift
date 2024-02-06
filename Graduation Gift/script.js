let songNames = [
  "andree.mp4",
  "rhyder.mp4",
  "tlinh.mp4",
  "lilgrade.mp4",
  "wres.mp4",

]
let singer = [
  "andree.png",
  "rhyder.png",
  "tlinh.png",
  "lilgrade.png",
  "wres.png",
]
var index = 0;
var solanclick = 0;
const curtain = document.querySelector('.curtain');

function toggleCurtain() {
  curtain.classList.add('opened-curstain');

  const letter = document.querySelector('.letter');
  letter.classList.add('fly-down'); 
}


const letter = document.querySelector('.letter');
function goto() {
  solanclick = solanclick + 1;

  letter.classList.add("animation-fly-out");

  setTimeout(function() {
    letter.classList.add("d-none")

    word.classList.remove("d-none")
    wordflick();

    if(solanclick <= 1){
      setTimeout(function() {
        word.classList.add("d-none") 
        stage.classList.remove('d-none');
        videoElement.play(); 
      }, 19000);
    }else{
      setTimeout(function() {
        word.classList.add("d-none");
        curtain.classList.remove('opened-curstain');
        setTimeout(function() {
          window.location.reload();
        }, 3000);
      }, 22000);
    }
    

  }, 3000);
}

const videoElement = document.querySelector('.singer-song');
const singerElement = document.querySelector('.singer');
const stage  = document.querySelector('.stage');

const word = document.querySelector('.word');

function play() {
  videoElement.play();

  if (!videoElement.paused){
    index++;
    changeVideo();
  } 
}

videoElement.addEventListener("ended", function() {
  index++;
  changeVideo();    
});

function changeVideo(){
  if(index < songNames.length){
    videoElement.src = `./assets/${songNames[index]}`;
    singerElement.src = `./assets/${singer[index]}`
    videoElement.play();
  }else{
    stage.classList.add("d-none")
    letter.classList.remove("d-none")
    letter.classList.remove('animation-fly-out'); 
    letter.classList.add('fly-down'); 

  }
}

var words = [
  ':)))',
  'Cái gì cũng phải từ từ',
  'Tớ mời được vài người đến dự lễ tốt nghiệp cậu nè', 
  'Cậu đã sẵn sàng chưa', 
  'Okay giờ bắt đầu thôi!!'
];


var words2 = [
  ':)) Ahihi',
  'Bất ngờ chỉ tới đây thôi',
  'Bằng thật thì cậu phải tự đi lấy rồi',
  'Còn cái này cậu chỉ được xem thôi',
  'Khi nào tụi mình có dịp gặp nhau thì bù lại bằng cái khác nhá',
  'Tinh thần đã thấy thoải mái chưa',
  'Chuẩn bị tốt nghiệp thôi nào',
  '<3 <3 <3 <3 <3',
]

  
var wordflick = function () {
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

  if(solanclick != 1){
    words = words2;
    len = words2.length
  }
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

