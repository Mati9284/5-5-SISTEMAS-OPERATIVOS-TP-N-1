
const anuncioPrincipalProducto = document.querySelector("#anuncioPrincipal");
const botonesAnuncioAbrir = document.querySelectorAll(".botonAgregarCarrito, .botonAgregarCarritoOferta");
const botonCerrarAnuncioPrincipal = document.querySelectorAll(".botonCerrarAnuncioPrincipal");

let intervaloAnuncioPrincipalActivo = false; //BOOL

botonesAnuncioAbrir.forEach(element => {
    element.addEventListener("click", () => {
        intervaloAnuncioPrincipalActivo = true;
        anuncioPrincipalProducto.style.display = "flex";
    });
});

botonCerrarAnuncioPrincipal.forEach(element => {
    element.addEventListener("click", () => {
        intervaloAnuncioPrincipalActivo = false;
        anuncioPrincipalProducto.style.display = "none";
    });
});