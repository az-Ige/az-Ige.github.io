var g$materiecurenta = g$conf.$materii.$MatematicaM1;
var lastimgclicked;
window.onclick = () => ($("#testid")?.remove(), (lastimgclicked = undefined));

// creates credits and link
function showCreditsAndBarem(e, elem, test, srclast) {
  // if clicked on same image let it pass to window which will delete the actions
  if (elem == lastimgclicked) return;
  lastimgclicked = elem;
  e.stopImmediatePropagation();

  const teste = g$materiecurenta.$testeadded;

  // remove last credit and link
  $("#testid")?.remove();

  var menu = $el("div", {
    id: "testid",
    onclick: (e) => e.stopImmediatePropagation(),
  });
  var flexdiv = $el("div");
  flexdiv.classList.add("flex");
  menu.appendChild(flexdiv);

  if (teste[test]?.varianta == undefined)
    flexdiv.appendChild($el("p", { textContent: "testul: " + test }));
  else {
    var credits = $el("span");
    credits.appendChild(LinkInSpan("testul: ", test, teste[test].varianta));
    credits.appendChild(LinkInSpan("barem: ", "apasa-ma", teste[test].barem));
    flexdiv.appendChild(credits);
  }

  // inser menu after clicked img
  elem.after(menu);
  // if (elem.getAttribute("scroll")) menu.scrollIntoView();

  // toggle answer logic and btn
  const toggleAnswer = $el("button", { textContent: "rezolvare" });
  flexdiv.appendChild(toggleAnswer);
  var baremimg;
  toggleAnswer.addEventListener("click", (e) => {
    if (menu.querySelector("img")) return menu.querySelector("img").remove();
    const lastpart = srclast.lastIndexOf("/");
    const baremsrc =
      srclast.slice(0, lastpart) + "/barem" + srclast.slice(lastpart);
    baremimg = $el("img", {
      src: baremsrc,
      alt: "nu are barem inca",
      onload: () => baremimg.classList.add("mygrow"),
      onerror: () => baremimg.classList.add("mygrow"),
    });
    baremimg.classList.add("comfy-taking-room");
    menu.appendChild(baremimg);
    // baremimg.scrollIntoView();
  });
}

// enter exercitiu
function Load(what = []) {
  // img options
  const imgopt = {
    loading: "lazy",
    alt: "did not load: upsi",
  };

  $("main").innerHTML = "";
  Object.keys(g$materiecurenta.$testeadded).map((test) => {
    var basesrc = `./Materii/${g$materiecurenta.$materiename}/${test}/`;

    // create img group
    var result = $el("div");
    result.classList.add("imggroup");
    result.classList.add("darktheme");

    var lastsrc = "";
    what.map((ex) => {
      lastsrc = basesrc + ex + ".png";
      const img = $el("img", {
        src: lastsrc,
        ...imgopt,
        onerror: (e) => result.remove(),
        onload: (e) => img.classList.add("mygrow"),
      });
      result.appendChild(img);
    });

    // image for checking unchecking
    var checksrc = "Sprites/notdone.jpg";
    if (localStorage.getItem(lastsrc)) checksrc = checksrc.replace("not", "");
    const img = $el("img", { src: checksrc });
    result.appendChild(img);
    img.classList.add("checkmark");
    img.onclick = (e) => {
      e.stopImmediatePropagation();
      if (img.src.includes("/done")) {
        localStorage.removeItem(lastsrc);
        img.src = img.src.replace("/done", "/notdone");
      } else {
        localStorage.setItem(lastsrc, "true");
        img.src = img.src.replace("/notdone", "/done");
        if (!$("#testid")) result.click();
        if (!$("#testid img")) $("#testid button")?.click();
      }
    };
    // append and add listeners
    $("main").appendChild(result);
    last = result;
    result.onclick = (e) => showCreditsAndBarem(e, result, test, lastsrc);
  });
}

var lastentered;
function CreateTd(textContent, l1id) {
  const td = $el("td", {
    textContent,
    onclick: () => {
      lastentered?.classList.remove("focus");
      td.classList.add("focus"), (lastentered = td);

      var loadthose = [];
      const index = g$alphabet.indexOf(`${textContent}`.at(-1));
      if (index == -1) return Load([(l1id + textContent).toLowerCase()]);
      for (let i = 0; i <= index; i++)
        loadthose.push(
          (l1id + textContent.slice(0, -1) + g$alphabet[i]).toLowerCase()
        );
      Load(loadthose);
    },
  });
  return td;
}
function CreateStructure(l1) {
  // create and append table
  const table = $el("table");
  $("#structure").appendChild(table);

  // loop over structure for l1, l2, l3
  l1.map((l2, i1) => {
    var l1id = romanize(i1 + 1);

    // create row and the l1 td
    const tr = $el("tr");
    tr.appendChild($el("td", { textContent: l1id }));
    table.appendChild(tr);

    // just some l2 stuff
    if (typeof l2 == "number") {
      for (let i2 = 0; i2 < l2; i2++) tr.appendChild(CreateTd(i2 + 1, l1id));
      return;
    }
    l2.map((l3, i2) => {
      if (typeof l3 != "number") return;
      for (let i3 = 0; i3 < l3; i3++)
        tr.appendChild(CreateTd(i2 + 1 + toabc(i3 + 1), l1id));
    });
  });
}

CreateStructure(g$materiecurenta.$structure);
Load(["i1"]);
// const QueryUserDiv = $("#query-user");
// var Choices = [];
// function Finished(result) {
//   Choices.push(result);
//   if (result == "Ani") {
//     Choices = [];
//     ChoseFrom(["Anii nu merg inca", "Press Me to Close"]);
//     return;
//     ChoseFrom(
//       Object.keys(g$conf.$materii).map(
//         (i) => Object.keys(g$conf.$materii[i].$teste)[0].split("_")[0]
//       )
//     );
//   } else if (result == "Materii") {
//     ChoseFrom(Object.keys(g$conf.$materii).map((i) => i.slice(1)));
//   } else {
//     if (Choices[0] == "Materii") {
//       // create structure for Choices[1]
//     } else if (Choices[0] == "Ani") {
//       // Show all that have the Choices[1]
//     } else {
//       return;
//     }
//   }
// }
// function ChoseFrom(textlist) {
//   QueryUserDiv.innerHTML = "";
//   QueryUserDiv.classList.remove("hide_by_opacity");
//   textlist.map((text) => {
//     const btn = $el("button", { textContent: text });
//     btn.addEventListener("click", (e) => {
//       QueryUserDiv.classList.add("hide_by_opacity");
//       Finished(btn.textContent);
//     });
//     QueryUserDiv.appendChild(btn);
//   });
// }

// ChoseFrom(["Ani", "Materii"]);
// construct structure
// const nav = $("#bac-structure");
// const bac = $el("ul");
// structure.map((subiect, index) => {
//   const li = $el("li");
//   li.appendChild($el("p", { textContent: index + 1 }));
//   const newul = $el("ul");
//   li.appendChild(newul);
//   subiect.map((problema) =>
//     newul.appendChild($el("li", { textContent: problema }))
//   );
//   bac.appendChild(li);
// });
// nav.appendChild(bac);
// conf$added.map((test) => {});
