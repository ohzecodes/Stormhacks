                                                                             
if (document.URL.includes("https://app.slack.com/")) {
let text = "";
let toxic = false;
console.log("content.js running");

document.addEventListener("keydown", (event) => {

  if (event.key == "Enter" && toxic) {
        event.preventDefault(); //this works for links
        event.stopPropagation(); //this does not work
        alert("Woah, Hold up. A little too toxic");
    }
   else {
    text = document.getElementsByClassName('ql-editor')[0].children[0].textContent
    console.log(text);
    let sending = {
        comment: { text: text },
        languages: ["en"],
        requestedAttributes: { TOXICITY: {} },
      };
      if (text != "") {
        let url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${apikey}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.send(JSON.stringify(sending));
        xhr.onload = (res) => {
          let m = JSON.parse(res.target.response);
          let p = m.attributeScores.TOXICITY.summaryScore.value;
          if (p > 0.5) {
            event.preventDefault();
              toxic = true;
          } else {
              toxic = false;
          }
        };
      }
  }
}, {capture: true});
}