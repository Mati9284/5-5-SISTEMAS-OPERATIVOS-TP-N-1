
const botonesAgregarCarrito = document.querySelectorAll(".botonAgregarCarrito, .botonAgregarCarritoOferta");

botonesAgregarCarrito.forEach(element => {
    element.addEventListener("click", (event) => {
        const article = event.target.closest('article');
        if (article) {
            article.style.display = 'none';
        }
    });
});