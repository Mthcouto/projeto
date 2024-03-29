function toggleMode() {
    const html = document.documentElement
    html.classList.toggleMode("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }     
    }