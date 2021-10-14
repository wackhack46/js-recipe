const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  const memo = document.createElement("div")
  const deleteButton = document.createElement("button")
  tsuika(memo, deleteButton)
  sakujo(memo, deleteButton)
}

const sakujo = function(memo, deleteButton) {
  deleteButton.textContent = "削除"
  deleteButton.onclick = function() {
    memo.remove()
  }
}

const tsuika = function(memo, deleteButton) {
  memo.textContent = memoInput.value
  memoContainer.append(memo)
  memo.append(deleteButton)
  memoInput.value = ""
}
