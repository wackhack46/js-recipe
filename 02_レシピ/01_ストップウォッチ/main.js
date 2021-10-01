const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
//countUpという定数に以下の関数を代入する
const countUp = function() {
  count += 1
  display.textContent = count / 100
}
//変数idは値を持たない
let id = null

button.onclick = function() {
  //idが初期値のとき
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  }
  //if文でidが値を持ちなおかつボタンがクリックされたとき
  else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

//発展★★・・・button.onclick = function()という動作が行われた後にcountUp定数にfunction()が代入されていくので、10msごとカウント→表示となるため微小なずれが生じる。
