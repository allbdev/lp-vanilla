document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const headerClasses = document.getElementById('header-menu')

        if (headerClasses.className === 'open') {
            headerClasses.classList.toggle("open")
        }

        const top = document.querySelector(this.getAttribute('href')).offsetTop

        window.scrollTo({
            top: top - 100,
            behavior: 'smooth',
        })
    });
});

function showMenu() {
    document.getElementById('header-menu').classList.toggle("open")
}

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function showArticle(id) {
    const allArticles = [
        'sobre-mim-musica',
        'sobre-mim-musculacao',
        'sobre-mim-tecnologia',
        'sobre-mim-familia'
    ]

    for (const article of allArticles) {
        if (article === id) {
            document.getElementById(article).className = 'show'

            if (article === 'sobre-mim-musica') {
                document.getElementById('videos-audio-container').className = ''
            } else {
                document.getElementById('videos-audio-container').className = 'hidden-music'
                document.getElementById('video-player').pause()
                document.getElementById('audio-player').pause()
            }
        } else {
            document.getElementById(article).className = 'hidden'
        }
    }
}

function toggleMusic(id) {
    const videoPlayer = document.getElementById('video-player')
    const audioPlayer = document.getElementById('audio-player')

    if (id === 'video-player') {
        videoPlayer.className = 'show-music'
        audioPlayer.className = 'hidden-music'

        audioPlayer.pause()

        return
    }

    videoPlayer.className = 'hidden-music'
    audioPlayer.className = 'show-music'

    videoPlayer.pause()
}

function submitForm(e) {
    alert('Formulário de contato enviado com sucesso')
    e.preventDefault();
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", submitForm, true);