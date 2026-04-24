function addMemo() {
  const input = document.getElementById("memoInput");
  const text = input.value;

  if (text === "") return;

  createMemo(text);
  saveMemo(text);

  input.value = "";
}

function createMemo(text) {
  const div = document.createElement("div");
  div.className = "memo";
  div.textContent = text;

  div.onclick = function () {
    div.remove();
    deleteMemo(text);
  };

  document.getElementById("memoList").appendChild(div);
}

function saveMemo(text) {
  const memos = JSON.parse(localStorage.getItem("memos")) || [];
  memos.push(text);
  localStorage.setItem("memos", JSON.stringify(memos));
}

function loadMemos() {
  const memos = JSON.parse(localStorage.getItem("memos")) || [];

  memos.forEach(text => {
    createMemo(text);
  });
}

function deleteMemo(text) {
  let memos = JSON.parse(localStorage.getItem("memos")) || [];
  memos = memos.filter(m => m !== text);
  localStorage.setItem("memos", JSON.stringify(memos));
}

loadMemos();