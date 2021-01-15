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

createDrops(data)
const partTitles = document.querySelectorAll(".part_title");

const drop = (option) => {
    let target = document.querySelector(option.dataset.drop)
    option.open = () => {
        partTitles.forEach(q => {
            if (q !== option) q.close()
        })
        target.style.display = "flex"
        setTimeout(() => {
            target.classList.add('active')
        }, 0);
    };
    option.close = () => {
        target.classList.remove('active')
        setTimeout(() => {
            target.style.display = "none"
        }, 200);
    };
}

partTitles.forEach(e => drop(e))