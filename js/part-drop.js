const data = [{
        color: "#ba6363",
        subColor: "#dda3a3",
        words: {
            hello: {
                translate: "Привет",
                example: "Hello Lenny! How are you doing today?",
            },

            word: {
                translate: "Слово",
                example: "It is interesting that there is a word called word",
            },
        },
    },
    {
        color: "#ba8263",
        subColor: "#e3986e",
        words: {
            hello: {
                translate: "Привет",
                example: "Hello Lenny! How are you doing today?",
            },

            word: {
                translate: "Слово",
                example: "It is interesting that there is a word called word",
            },
        },
    },
    {
        color: "#aeba63",
        subColor: "#daeb71",
        words: {
            hello: {
                translate: "Привет",
                example: "Hello Lenny! How are you doing today?",
            },

            word: {
                translate: "Слово",
                example: "It is interesting that there is a word called word",
            },
        },
    },
];

const createDrops = (options) => {
    options.forEach((e, i) => {
        document.querySelector(".vocabulary").insertAdjacentHTML(
            "beforeend",
            `
    <div class="part">
        <button class="part_title" data-drop="#part_${i + 1}">Part ${
        i + 1
      }</button>

        <div class="part_drop" id="part_${i + 1}">
            <button class="drop_button">words</button>
            <button class="drop_button">game</button>
        </div>
    </div>`
        );
    });
    const parts = document.querySelectorAll(".part");
    parts.forEach(
        (e, i) => (e.firstElementChild.style.background = options[i].color)
    );
    parts.forEach(
        (e, i) => (e.lastElementChild.style.background = options[i].subColor)
    );
};

createDrops(data);
const partTitles = document.querySelectorAll(".part_title");

const dropListener = (event) => {
    if (event.target.dataset.drop) {
        let target = document.querySelector(event.target.dataset.drop);
        document
            .querySelectorAll(".part_drop.active").forEach(e => e !== target ? e.classList.remove("active") : void 0);
        target.classList.toggle('active')
    }
};