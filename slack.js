if (document.URL.includes("https://app.slack.com/")) {

console.log("content.js running");
document.addEventListener("keydown", (event) => {
    //Because enter key means the text is sent so we get the key before the uses presses enter.
    let text = document.getElementsByClassName('ql-editor')[0].children[0].textContent
    console.log(text);
  if (event.key == "Enter") {
    //logic
    //get value from the text field
    console.log(text);
  }
});
}