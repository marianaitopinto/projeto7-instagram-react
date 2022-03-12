export default function Stories() {
    const urlImagemStories = ["./img/9gag.svg", "./img/meowed.svg", "./img/barked.svg", "./img/nathanwpylestrangeplanet.svg", "./img/wawawicomics.svg", "./img/respondeai.svg", "./img/filomoderna.svg", "./img/memeriagourmet.svg"];
    const nomeStories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]
    return (

        <div class="stories">

            <div class="story">
                <div class="imagem">
                    <img src="./img/9gag.svg" />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/meowed.svg" />
                </div>
                <div class="usuario">
                    meowed
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/barked.svg" />
                </div>
                <div class="usuario">
                    barked
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/nathanwpylestrangeplanet.svg" />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/wawawicomics.svg" />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/respondeai.svg" />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/filomoderna.svg" />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./img/memeriagourmet.svg" />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}