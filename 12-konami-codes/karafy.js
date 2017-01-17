// Adapted from Cornify.JS

let karafy_count = 0;
const kcPics = [
"https://render.bitstrips.com/render/9941596/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10187885/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7897747/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8615904/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8333556/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9990793/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9946267/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10189586/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9954402/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7258121/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10189582/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10178834/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9947063/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7717972/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9483720/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10187940/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9988694/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9998023/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9666156/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10212486/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10139105/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10019011/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8363905/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10187904/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9157833/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10058753/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9940596/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9419230/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9175281/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7548803/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8770505/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10185496/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8709434/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8149231/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10214273/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10178725/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9945254/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9990551/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10117671/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7681590/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9936649/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9319680/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10117679/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7258102/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9936863/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8363918/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9073886/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10155970/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9945807/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9188364/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10152648/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9998079/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10211960/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10139707/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9946907/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8790713/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9991235/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9975410/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9666023/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7638184/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9635657/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8073032/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10134284/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9954824/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10212152/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7759652/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10149736/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8375309/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9941970/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9543335/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9935306/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9954824/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9248485/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9573263/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9991476/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10211959/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9877292/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9653442/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9653495/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9281517/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10176239/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8640348/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9101092/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7681590/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8813497/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7195995/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7216901/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8767610/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8363918/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9945101/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8398479/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8333576/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8736904/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10212727/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10212753/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9853660/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10133587/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9936283/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9666023/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8643870/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10155293/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9946282/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9513915/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8263912/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7638216/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8968011/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8063058/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9990837/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10134275/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10188122/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10117701/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8263908/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9946687/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9788649/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10211507/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10117807/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9941807/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/10188118/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8809958/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7897753/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7933842/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9990876/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7834193/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8255210/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9021226/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9174853/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9946208/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8097130/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9945775/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9991414/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7497158/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9947028/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7897741/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9991834/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9073901/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/8479111/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/7496923/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9990777/11800032_1-s1-v1.png?transparent=1",
"https://render.bitstrips.com/render/9941568/11800032_1-s1-v1.png?transparent=1",
" https://render.bitstrips.com/render/8573207/11800032_1-s1-v1.png?scale=3"
]
const audio = document.querySelector('audio');

function saySomething() {
  console.log("HEHEHEHE!")
  audio.currentTime = 0;
  audio.play();
  karafy();
}

function karafy_updateCount() {
  let p = document.getElementById('karafyCount');
  if(p == null) {
    p = document.createElement('p');
    p.id = 'karafyCount';
    p.style.position = 'fixed';
    p.style.bottom = '50px';
    p.style.left = '0px';
    p.style.right = '0px';
    p.style.zIndex = '1000000000';
    p.style.color = '#009688';
    p.style.textAlign = 'center';
    p.style.fontSize = '24px';
    p.style.fontFamily = "cursive";
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(p);
  }
  if(karafy_count == 1) {
    p.innerHTML = `${karafy_count} lil Kara jumpin all around`;
  } else {
    p.innerHTML = `${karafy_count} lil Karas jumpin all around!`;
  }
};

function karafy() {
  karafy_count += 1;
  let kcUrl = kcPics[Math.ceil(Math.random()*kcPics.length) || 1];
  const div = document.createElement('div');
  div.style.position = 'fixed';
  let numType = 'px';
  const heightRandom = Math.random() * .75;
  let windowHeight = 768;
  let windowWidth = 1024;
  let height = 0;
  const width = 0;
  const de = document.documentElement;
  if (typeof (window.innerHeight) == 'number') {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
  } else if (de && de.clientHeight) {
      windowHeight = de.clientHeight;
      windowWidth = de.clientWidth;
  } else {
      numType = '%';
      height = `${Math.round(height * 100)}%`;
  }

  div.onclick = saySomething;
  div.style.zIndex = 10;
  div.style.outline = 0;
  if (karafy_count == 15) {
      div.style.top = `${Math.max(0, Math.round((windowHeight - 530) / 2))}px`;
      div.style.left = `${Math.round((windowWidth - 530) / 2)}px`;
      div.style.zIndex = 1000;
  } else {
      if (numType == 'px') {
          div.style.top = Math.round(windowHeight * heightRandom) + numType;
      } else {
          div.style.top = height;
      }
      div.style.left = `${Math.round(Math.random() * 90)}%`;
  }

  const img = document.createElement('img');
  img.setAttribute('src', `${kcUrl}`);
  const ease = "all .1s linear";
  //div.style['-webkit-transition'] = ease;
  //div.style.webkitTransition = ease;
  div.style.WebkitTransition = ease;
  div.style.WebkitTransform = "rotate(1deg) scale(1.01,1.01)";
  //div.style.MozTransition = "all .1s linear";
  div.style.transition = "all .1s linear";

  div.onmouseover = function() {
      const size = 1 + Math.round(Math.random() * 10) / 100;
      const angle = Math.round(Math.random() * 20 - 10);
      const result = `rotate(${angle}deg) scale(${size},${size})`;
      this.style.transform = result;
      //this.style['-webkit-transform'] = result;
      //this.style.webkitTransform = result;
      this.style.WebkitTransform = result;
      //this.style.MozTransform = result;
      //alert(this + ' | ' + result);
  };

  div.onmouseout = function() {
      const size = .9 + Math.round(Math.random() * 10) / 100;
      const angle = Math.round(Math.random() * 6 - 3);
      const result = `rotate(${angle}deg) scale(${size},${size})`;
      this.style.transform = result;
      //this.style['-webkit-transform'] = result;
      //this.style.webkitTransform = result;
      this.style.WebkitTransform = result;
      //this.style.MozTransform = result;
  };

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(div);
  div.appendChild(img);
  karafy_updateCount();
};



