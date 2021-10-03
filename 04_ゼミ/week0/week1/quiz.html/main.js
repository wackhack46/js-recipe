const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const Answer = document.getElementById("answer")
button1.onclick = function() {
  Answer.textContent = "正解!四間飛車が得意戦法です！"
}
button2.onclick = function() {
  Answer.textContent = "はずれ、、だけどオールナイトニッポン聞いてね！"
}
button3.onclick = function() {
  Answer.textContent = "はずれ！　満ぶりしか勝たん！"
}
