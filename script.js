const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

const img = document.getElementById('main');  // 画像
const [leftArrow, rightArrow] = document.getElementsByTagName('span');

let imgN = 0;  // 現在のファイル番号

const p = document.createElement('p');  // p要素を生成
p.style.color = 'lightgray';  // p要素の文字色を設定

const div = document.getElementById('photo'); // 親要素を取得
div.insertBefore(p, img.nextElementSibling);  // img要素の下にp要素を追加

function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
  setImage();
});


leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  setImage()
});

rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage()
});

/* 自動再生／停止ボタン */
const button = document.createElement('button');
button.textContent = '自動再生する';
div.appendChild(button);

let autoplay = false;
button.addEventListener('click', () => {
  if (autoplay == false) {
    button.textContent = '停止する';
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false;
    button.textContent = '自動再生する';
  }
});
