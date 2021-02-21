// linkedin
apikey = "AIzaSyAa3S5wueqldLY9LxfdUrhR5ce6q0B-gyM";

console.log("content.js running");
alert("testing");
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    //logic
    //get value from the text field

    let r = document.getElementsByClassName("msg-form__contenteditable")[0]
      .children[0].textContent;
    console.log(r);

    let sending = {
      comment: { text: r },
      languages: ["en"],
      requestedAttributes: { TOXICITY: {} },
    };
    if (r != "") {
      let url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${apikey}`;
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.send(JSON.stringify(sending));
      xhr.onload = (res) => {
        let m = JSON.parse(res.target.response);
        let p = m.attributeScores.TOXICITY.summaryScore.value;
        if (p > 0.5) {
          alert("Woah, Hold up, Think, \n linkedIn is a professional website!");
        }
      };
    }
  }
});
