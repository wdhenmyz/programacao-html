import Style from "./style.mjs";

const div1 = new Style("tagname", "div");
div1.set({
  backgroundColor: "lightblue",
  color: "darkgreen",
  padding: "10px",
  border: "2px solid darkblue",
  borderRadius: "5px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center"
});

const div2 = new Style("id", "teste");
div2.set({
  backgroundColor: "lightcoral",
  color: "white",
  padding: "15px",
  border: "2px solid darkred",
  borderRadius: "10px",
  fontFamily: "'Courier New', monospace",
  textAlign: "left"
});

const div3 = new Style("classname", "teste");
div3.set({
    backgroundColor: "purple",
    color: "white",
    padding: "20px",
    border: "2px solid darkmagenta",
    borderRadius: "15px",
    fontFamily: "'Times New Roman', serif",
    textAlign: "right"
})