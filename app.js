function createMemo(text) {
  const div = document.createElement("div");
  div.className = "memo";
  div.textContent = text;

  // クリックで編集
  div.onclick = function () {
    const textarea = document.createElement("textarea");
    textarea.value = div.textContent;

    div.replaceWith(textarea);
    textarea.focus();

    // Enterで保存
    textarea.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const newText = textarea.value;

        const newDiv = document.createElement("div");
        newDiv.className = "memo";
        newDiv.textContent = newText;

        newDiv.onclick = div.onclick;

        textarea.replaceWith(newDiv);

        updateMemo(text, newText);
      }
    });
  };

  document.getElementById("memoList").appendChild(div);
}
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "削除";

deleteBtn.onclick = function (e) {
  e.stopPropagation(); // 編集と分ける
  div.remove();
  deleteMemo(text);
};

div.appendChild(deleteBtn);