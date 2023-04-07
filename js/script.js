const arrowRightBtn = document.querySelector('.btn-prev');
const arrowLeftBtn = document.querySelector('.btn-next');
const logomarca = document.querySelector("img")
const pagMaxima = 18;
const pagMinima = 0;
let pag = 0;






const movies = document.querySelector(".movies");
const container = document.querySelector(".movies-container");


let response = []
const input = document.querySelector('.input');
const btnTheme = document.querySelector(".btn-theme");
const root = document.querySelector(":root")



const titleDoVideo = document.querySelector(".highlight__title");
const notaDoFilme = document.querySelector(".highlight__rating");
const imagemVideo = document.querySelector(".highlight__video");
const descricaoDoFilme = document.querySelector(".highlight__description")
const generoDoFilme = document.querySelector(".highlight__genres");
const dataDoFilme = document.querySelector(".highlight__launch");
const videoTrailer = document.querySelector(".highlight__video-link")


const modal = document.querySelector(".modal");
const bodyModal = document.querySelector(".modal__body");
const modalClose = document.querySelector(".modal__close");
const imageModal = document.querySelector(".modal__img");
const titleModal = document.querySelector(".modal__title")
const avaregeModal = document.querySelector(".modal__average")
const descriptionModal = document.querySelector(".modal__description");
const genreModal = document.querySelector(".modal__genre-average");






arrowLeftBtn.addEventListener('click', () => {
    if (pag === 12) {
        pag = pagMinima;
    } else {

        pag += 6;
    }
    carregandoFilme()
});

arrowRightBtn.addEventListener('click', () => {
    if (pag === 0) {
        pag = 12;
    } else {

        pag -= 6;
    }
    carregandoFilme()
});



modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
})

async function functionModal(filme) {
    modal.classList.remove("hidden")



    const resp = await api.get(`/3/movie/${filme.id}?language=pt-BR`);
    const respData = resp.data
    imageModal.src = respData.backdrop_path
    titleModal.textContent = resp.data.title
    avaregeModal.textContent = resp.data.vote_average.toFixed(1)
    descriptionModal.textContent = resp.data.overview

}
function criandoCard(filme) {

    const containerMovie = document.createElement("div");
    containerMovie.classList.add("movie");
    containerMovie.style.backgroundImage = `url(${filme.poster_path})`;
    containerMovie.addEventListener("click", () => functionModal(filme));



    const spanNota = document.createElement("span");
    spanNota.textContent = filme.vote_average;

    const containerInfo = document.createElement("div");
    containerInfo.classList.add("movie__info");

    const containerRating = document.createElement("span");
    containerRating.classList.add("movie__rating");

    const star = document.createElement("img");
    star.src = "./assets/rating.svg"
    star.alt = "star"

    const containerTitle = document.createElement("span");
    containerTitle.classList.add("movie__title");
    containerTitle.textContent = filme.title;
    containerTitle.title = filme.title;

    containerInfo.appendChild(containerTitle);
    containerInfo.appendChild(containerRating);
    containerRating.appendChild(star);
    containerMovie.appendChild(containerInfo);
    containerRating.appendChild(spanNota);
    movies.appendChild(containerMovie);


}



function carregandoFilme() {


    movies.innerHTML = " ";
    try {
        for (let i = pag; i < pag + 6; i++) {
            if (pag > 18) {
                pag = pagMinima;

            }
            const filme = response.data.results[i];

            criandoCard(filme)

        }

    } catch (error) {

    }
}


async function loadPosts() {
    try {
        if (!input.value) {
            response = await api.get('/3/discover/movie?language=pt-BR&include_adult=false');

        } else {
            response = await api.get(`3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`);

        }

        carregandoFilme()

    } catch (error) {

    }
}
loadPosts();



input.addEventListener('keydown', async (event) => {

    if (event.key !== "Enter") {
        return;
    }
    pag = 0

    if (input.value === " ") {
        loadPosts()
    } else {

        loadPosts()

    }
    input.value = ""




});



async function loadPostFilmeDia() {

    try {
        const response = await api.get('/3/movie/436969?language=pt-BR');
        const responseVideo = await api.get('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');


        const genresName = response.data.genres.map((genre) => {
            return genre.name


        })

        const genresString = genresName.join(", ")

        titleDoVideo.textContent = response.data.title
        notaDoFilme.textContent = response.data.vote_average.toFixed(1)
        imagemVideo.style.backgroundImage = `url(${response.data.backdrop_path})`;
        descricaoDoFilme.textContent = response.data.overview
        generoDoFilme.textContent = genresString
        videoTrailer.href = `https://www.youtube.com/watch?v=${responseVideo.data.results[1].key}`
        dataDoFilme.textContent = new Date(response.data.release_date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });





    } catch (error) {

    }
}

loadPostFilmeDia();




function applyCurrentTheme() {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme || currentTheme === "light") {

        btnTheme.src = "./assets/light-mode.svg";
        arrowLeftBtn.src = "./assets/arrow-right-dark.svg";
        arrowRightBtn.src = "./assets/arrow-left-dark.svg";
        logomarca.src = "./assets/logo-dark.png";
        modalClose.src = "./assets/close-dark.svg"


        root.style.setProperty("--bg-input-color", "#fff")
        root.style.setProperty("--input-color", "#1B2028")
        root.style.setProperty("--text-color", "#1b2028")
        root.style.setProperty("--input-text-color", "#1B2028")
        root.style.setProperty("--background", "#fff")
        root.style.setProperty("--bg-secondary", "#ededed")

        return;
    }


    btnTheme.src = "./assets/dark-mode.svg";
    arrowLeftBtn.src = "./assets/arrow-right-light.svg";
    arrowRightBtn.src = "./assets/arrow-left-light.svg";
    logomarca.src = "./assets/logo.svg";
    modalClose.src = "./assets/close.svg";

    root.style.setProperty("--bg-input-color", "#3E434D")
    root.style.setProperty("--input-color", "#665F5F")
    root.style.setProperty("--input-text-color", "#fff")
    root.style.setProperty("--text-color", "#fff")
    root.style.setProperty("--background", "#1B2028")
    root.style.setProperty("--background", "#1B2028")
    root.style.setProperty("--bg-secondary", "#2D3440")

}

btnTheme.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme || currentTheme === "light") {
        localStorage.setItem("theme", "dark");
        applyCurrentTheme();
        return;
    }
    localStorage.setItem("theme", "light");
    applyCurrentTheme();
});


















































































