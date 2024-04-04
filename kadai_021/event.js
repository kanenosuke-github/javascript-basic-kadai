const textElement = document.getElementById('text');
const btnElement = document.getElementById('btn');

btnElement.addEventListener('click',()=> {
  setTimeout(()=> {
    textElement.textContent = 'ボタンをクリックしました';
  },2000);
});