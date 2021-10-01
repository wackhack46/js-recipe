# git で保存して GitHub にアップロードする方法

```bash
git add .
git commit -m "コミット"
git push origin master
```

const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
//countUp という定数に以下の関数を代入する
const countUp = function() {
count += 1
display.textContent = count / 100
}
//変数 id は値を持たない
let id = null

button.onclick = function(){
//id が初期値のとき
if (id === null) {
// start
id = setInterval(countUp, 10)
button.textContent = "stop"
}
//if 文で id が値を持ちなおかつボタンがクリックされたとき
else {
// stop
clearInterval(id)
id = null
button.textContent = "start"
}
}

//発展 ★★・・・button.onclick = function()という動作が行われた後に countUp 定数に function()が代入されていくので、10ms ごとカウント → 表示となるため微小なずれが生じる。
