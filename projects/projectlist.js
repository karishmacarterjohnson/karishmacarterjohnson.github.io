const projectlist = [
  {
    id: 1,
    title: "Random Quote Machine",
    file: '../rqm/rqm.html',
    category: "HTML5",
    date: 2020.7,
    img: "../rqm/rqm.png",
    desc: `On click, presents you with a random (pre-stored) quote. Also allows a direct tweet of the presented quote`,
  },
  {
    id: 2,
    title: "Calculator",
    file:"../calculator/calc.html",
    category: "HTML5",
    date: 2020.8,
    img: "../calculator/calc.png",
    desc: `Arithmetic calculator using JavaScript. Works on click.`,
  },
  {
    id: 3,
    title: "Markdown Previewer",
    file:"https://karishmacarterjohnson.github.io/markdown-editor",
    category: "React",
    date: 2020.12,
    img: "../external_repo/markdown-previewer.png",
    desc: "React Markdown Previewer. Extendable editor window for inputting text which is then updated automatically in the markdown previewer below."
  },
  {
    id: 4,
    title: "Tiktok Sound Board",
    file:"../sound-board/sound-board.html",
    category: "jQuery",
    date: 2020.11,
    img: "../sound-board/tiktok-sound-board.png",
    desc: "Plays popular tiktok sound from Fall 2020 on keyboard or mouseclick. Displays audio title in window."
  }
  ];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayProjectItems(projectlist);
  displayProjectButtons();
});

function diplayProjectItems(projectItems) {
  let displayProject = projectItems.map(function (item) {
    // console.log(item);

    return `<article class="project-item" onclick="location.href='${item.file}'">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="date">${item.date}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayProject = displayProject.join("");
  
  sectionCenter.innerHTML = displayProject;
}
function displayProjectButtons() {
  const categories = projectlist.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const projectCategory = projectlist.filter(function (projectItem) {
        if (projectItem.category === category) {
          return projectItem;
        }
      });
      if (category === "all") {
        diplayProjectItems(projectlist);
      } else {
        diplayProjectItems(projectCategory);
      }
    });
  });
}


////////// 
/////nav//
//////////

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


jQuery("quote-box").fitText(0.38);
