document.addEventListener("DOMContentLoaded", function() {
    // Carregar cabeçalho
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    // Carregar rodapé
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
}); 