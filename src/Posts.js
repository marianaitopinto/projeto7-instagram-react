export default function Posts() {
    const infos = [
        { user: "meowed", picture: "gato-telefone", likedBy: "respondeai", likedQt: "101.523" },
        { user: "barked", picture: "dog", likedBy: "adorable_animals", likedQt: "99.159" },
    ]
    return (
        <div class="posts">
            {infos.map(Post)}
        </div>
    )
}


function RenderIcons(props) {
    return (
        <ion-icon name={props.IconName}></ion-icon>
    )
}

function PostHeader({ user }) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`./img/${user}.svg`} />
                {user}
            </div>
            <div class="acoes">
                <RenderIcons IconName="ellipsis-horizontal" />
            </div>
        </div>
    )
}

function Content({ picture }) {
    return (
        <div class="conteudo">
            <img src={`./img/${picture}.svg`} />
        </div>
    )
}

function Actions() {
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]
    return (
        <div class="acoes">
            <div>
                {icons.map(icon => <RenderIcons IconName={icon} />)}
            </div>
            <div>
                <RenderIcons IconName="bookmark-outline" />
            </div>
        </div>
    )
}

function Likes({ likedBy, likedQt }) {
    return (
        <div class="curtidas">
            <img src={`./img/${likedBy}.svg`} />
            <div class="texto">
                Curtido por <strong>{likedBy}</strong> e
                <strong>outras {likedQt} pessoas</strong>
            </div>
        </div>
    )
}

function Post({ user, picture, likedBy, likedQt }) {
    return (

        <div class="post">
            <PostHeader user={user}/>
            <Content picture={picture}/>

            <div class="fundo">
                <Actions />
                <Likes likedBy={likedBy} likedQt={likedQt}/>
            </div>
        </div>

    )
}