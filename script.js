const text = document.getElementById("text");
const textContent = "🌱 | Bretagne-RP";
let currentIndex = 0;

function typeText() {
  text.textContent += textContent[currentIndex];
  currentIndex++;
  if (currentIndex >= textContent.length) {
    clearInterval(timer);
  }
}

let timer = setInterval(typeText, 100);


fetch("./etoile.json").then(r => r.json()).then(rep => {
  const total = rep.reduce((sum, note) => sum + note, 0);
  const moyenne = total / rep.length;

  for(let i = 0;i < moyenne; i++){
    document.getElementById("star"+(i+1)).checked=true
    console.log("étoile n°"+(i+1)+" coché !")
  }
})

document.getElementById("note_btn").addEventListener("click", ()=>{
  if(localStorage.getItem("note")){
    alert("Vous avez déjà noté le site !")
    return
  }
  window.open("./note.html", "_blank", "toolbar=0, location=0, directories=0, status=0, scrollbars=no, resizable=no, copyhistory=0, menuBar=0, height=400, width=600, top="+((document.documentElement.scrollHeight - 600) / 2)+", left="+((document.documentElement.scrollWidth - 400) / 2)+"")
})