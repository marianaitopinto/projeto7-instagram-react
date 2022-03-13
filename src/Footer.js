import RenderIcons from "./RenderIcons"

export default function Footer() {
    const  icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"] 
    return (
        <div class="fundo-mobile">
            {icons.map(icon => <RenderIcons IconName={icon} />)}
        </div>
    )
}
