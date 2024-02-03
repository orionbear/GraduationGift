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
  
      const videoElement = document.querySelector('.domain-expand');
      videoElement.play();

      wordflick();
  
    }, 6000);

  }, 3000);
}

var words = [
  'Khoan đã',
  'Chờ tớ một tí',
  'Tớ còn vài điều muốn nói với cậu', 
  'Cậu đã sẵn sàng chưa', 
  'Bây giờ mình bắt đầu nhé !!'],

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

