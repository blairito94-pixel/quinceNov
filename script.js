const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");

const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");

const book = document.getElementById("book");

let currentPage = 0;

const pages = [

    // 1. PORTADA
    {
        left: `
            <p class="small-title">A little something for you...</p>
            <h2>¡Feliz cumpleaños!</h2>
            <p>Hoy es tu día. Espero que lo disfrutes.</p>
        `,
        right: `
            <img src="img/focaPortada.jpg"
                 alt="Foca de cumpleaños"
                 class="main-image">
            <h1>Happy Birthday!</h1>
            <p>Una pequeña sorpresa para ti.</p>
        `
    },

    // 2. INTERIOR
    {
        left: `
            <p class="small-title">A few words...</p>
            <h2>Para el cumpleañero</h2>
            <p>
                Espero que este dia te la pases muy bien
                que consigas muchos de los verdes y puedas
                disfutar de la poca juventud que te queda.
            </p>
            <p style="margin-top:20px">
                Espero que lo que queda de este año te traiga
                cosas bonitas.
            </p>
        `,
        right: `
            <img src="img/focaRelleno.jpg"
                 alt="Foca decorativa"
                 class="main-image">
            <h2>🦭</h2>
            <p>Un pequeño detalle para acompañar la ocasión.</p>
        `
    },

    // 3. CONTRAPORTADA
    {
        left: `
            <p class="small-title">And that's all...</p>
            <h2>Fin del comunicado.</h2>
            <p>Que tengas un buen cumpleaños.</p>
            <p style="margin-top:20px">
                Atentamente: Ale.
            </p>
        `,
        right: `
            <img src="img/insultoCumpleañero.jpg"
                 alt="Mensaje especial para el cumpleañero"
                 class="main-image">
            <h2>Felicidades!!!!</h2>
        `
    }
];

function showPage() {

    const page = pages[currentPage];

    book.classList.add("turning");

    setTimeout(() => {

        leftContent.innerHTML = page.left;
        rightContent.innerHTML = page.right;

        leftNumber.textContent = String(currentPage * 2 + 1).padStart(2, "0");
        rightNumber.textContent = String(currentPage * 2 + 2).padStart(2, "0");

        counter.textContent = `${currentPage + 1} / ${pages.length}`;

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;

        book.classList.remove("turning");

    }, 180);
}

nextBtn.addEventListener("click", () => {

    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage();
    }

});

prevBtn.addEventListener("click", () => {

    if (currentPage > 0) {
        currentPage--;
        showPage();
    }

});

// Mostrar la primera apertura
showPage();