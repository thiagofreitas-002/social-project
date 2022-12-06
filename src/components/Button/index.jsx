import * as C from "./styles";

import HandClick from "../../assets/iconhandclick.png"; 

export const Button = () => {
    return(
        <C.Container>
            <img className="imgclick" src={HandClick} alt="" />
            <C.Button>
                NOTICIAS
            </C.Button>
        </C.Container>
    )
}