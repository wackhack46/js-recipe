const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  console.log(memoInput.value)
  // タグ名を指定して要素をつくる
  const memo = document.createElement("div")
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  memo.textContent = memoInput.value // <div class="card>こんばんは</div>
  memoContainer.append(memo)
  memo.append(deleteButton)
  memoInput.value = ""
  deleteButton.onclick = function() {
    memo.remove()
  }
}
