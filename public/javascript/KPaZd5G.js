// CopyPix
document
  .getElementById("clipboardCopy")
  .addEventListener("click", clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#__ime-pix").value;
  await navigator.clipboard.writeText(text);
}