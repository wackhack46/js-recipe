//HTMLタグ内で指定したfigureにidを割り当てる
const figure = document.getElementById("figure")
//figure.onclick に関数(function())を代入すると、ボタンをクリックしたときに関数(roundのadd or remove)が実行される。
figure.onclick = function() {
  figure.classList.toggle("rounded")
}
