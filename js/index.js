partTitles.forEach(e => {
    e.addEventListener('click', () => {
        if (document.querySelector(e.dataset.drop).classList.contains('active')) e.close()
        else e.open()
    })
});