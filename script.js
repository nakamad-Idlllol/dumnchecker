const form = document.getElementById("habit-form");
const result = document.getElementById("result");
const selectedCount = document.getElementById("selected-count");
const message = document.getElementById("message");

const updateResult = () => {
  const checked = form.querySelectorAll('input[name="habit"]:checked').length;
  selectedCount.textContent = String(checked);

  if (checked >= 3) {
    result.classList.remove("safe");
    result.classList.add("out");
    message.textContent = `該当 ${checked} 件：アウト！ 今日は無理しすぎないようにしましょう。`;
    return;
  }

  result.classList.remove("out");
  result.classList.add("safe");
  message.textContent = `該当 ${checked} 件：まだセーフです。2つ以下に抑えましょう。`;
};

form.addEventListener("change", updateResult);
updateResult();
