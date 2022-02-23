(function () {

    // DECLARAÇÃO DE VARIÁVEIS
    const $PLAY = document.getElementById("play");
    const $PAUSE = document.getElementById("pause");
    const $ANTERIOR = document.getElementById("anterior");
    const $PROXIMA = document.getElementById("proxima");



    const MUSICAS = [
        {musica: "Distant Lover", artista: "Marvin Gaye", src: "Musicas/Distant Lover - Marvin Gaye.mp3",
        img: "Imagens/Marvin Gaye.jpg", estilo: "Soul Music"},
        {musica: "Club da Esquina II", artista: "Flavio Venturinni", src: "Musicas/Club da Esquina II - Flavio Venturini.mp3",
        img: "Imagens/praia.gif", estilo: "MPB"},
        {musica: "Amor dos Deuses", artista: "Fundo de Quintal", src: "Musicas/Amor Dos Deuses - Fundo de Quintal.mp3",
        img: "Imagens/Fundo de Quintal.gif", estilo: "Samba"},
        {musica: "Sunday Rain", artista: "Chael Tema", src: "Musicas/Sunday Rain - Chael Tema.mp3",
        img: "Imagens/Psico.gif", estilo: "New Age"},
        {musica: "Eagleheart", artista: "Stratovarius", src: "Musicas/Eagleheart - Stratovarius.mp3",
        img: "Imagens/rock.gif", estilo: "Rock"},
        {musica: "Sunflower", artista: "Post Malone", src: "Musicas/Sunflower - Post Malone.mp3",
        img: "Imagens/post.gif", estilo: "Dance Music"},
        {musica: "La Belle de Jour", artista: "Alceu Valença", src: "Musicas/La Belle de Jour - Alceu Valença.mp3",
        img: "Imagens/belle.gif", estilo: "MPB"},
        {musica: "Music Sounds Better With You", artista: "Stardust", src: "Musicas/Music Sounds Better With You - Stardust.mp3",
        img: "Imagens/star.gif", estilo: "Flash House"},
        {musica: "Friday", artista: "Riton x Nightcrawlers", src: "Musicas/Friday - Riton x Nightcrawlers.mp3",
        img: "Imagens/friday.gif", estilo: "Dance Music"},
        {musica: "Misled Love", artista: "More Relation", src: "Musicas/Misled Love - More Relation.mp3",
        img: "Imagens/Reggae.jpg", estilo: "Reggae Roots"}
    ];

    
    let qtd = MUSICAS.length;
    
    let $musica = document.getElementById("musica");
    let indexMusica = 0;
    let $titulo = document.getElementById("titulo");
    let $artista = document.getElementById("artista");
    let $imagem = document.querySelector("img");
    let $estiloMusica = document.getElementById("estiloMusica");

    let $tempoinicio = document.getElementById("tempoinicio");
    let $tempoFim = document.getElementById("tempofim");

    
    inicializarDados(indexMusica);

    // EVENTOS
    $PLAY.addEventListener("click", tocarMusica);
    $PAUSE.addEventListener("click", pausarMusica);
    $musica.addEventListener("timeupdate", atualizaProg);
    
    $ANTERIOR.addEventListener("click", () => {
        
        indexMusica--;      
        if (indexMusica < 0) {
            indexMusica = qtd - 1;
        }  
        inicializarDados (indexMusica);
        tocarMusica();
    });

    $PROXIMA.addEventListener("click", () => {
        indexMusica++;
        if (indexMusica >= qtd) {
            indexMusica = 0;
        }
        inicializarDados (indexMusica);
        tocarMusica();
    });


    // FUNÇÕES

    function inicializarDados (index) {
        
        $musica.setAttribute("src", MUSICAS[index].src);
        $musica.addEventListener("loadeddata", () => {
            $estiloMusica.textContent = MUSICAS[index].estilo;
            $titulo.textContent = MUSICAS[index].musica;
            $artista.textContent = MUSICAS[index].artista;
            $imagem.src = MUSICAS[index].img;
            $tempoFim.textContent = segundosMinutos(Math.floor($musica.duration));
            
        })
    }

    function tocarMusica () {
        $musica.play();
        $PAUSE.style.display = "block";
        $PLAY.style.display = "none";
    }

    function pausarMusica () {
        $musica.pause();
        $PAUSE.style.display = "none";
        $PLAY.style.display = "block";
    }

    function atualizaProg () {
        let $prog = document.getElementById("prog");
        let tempo = Math.floor(($musica.currentTime / $musica.duration) * 100) + "%";
        $prog.style.width = tempo;
        $tempoinicio.textContent = segundosMinutos(Math.floor($musica.currentTime));
    }

    function segundosMinutos (segundos) {
        let xMinutos = Math.floor(segundos / 60);
        let xSegundos = segundos % 60;

        if (xSegundos < 10 ) {
            xSegundos = "0" + xSegundos;
        }
        
        return xMinutos + ":" + xSegundos;        
    }


}) ()