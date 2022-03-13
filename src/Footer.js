export default function Footer() {
    const  icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"] 
    return (
        <div class="fundo-mobile">
            {icons.map(icon => <FooterIcon IconName={icon} />)}
        </div>
    )
}

function FooterIcon(props) {
    return (
        <ion-icon name={props.IconName}></ion-icon>
    )
}