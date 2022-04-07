import { useNavigate } from 'react-router-dom'

export function Pag3(){
    const navi = useNavigate();

    function naviToMenu(){
        navi('/menu')
    }

    return(
        <>
            <h1>Página 3</h1>
            <button onClick={naviToMenu}>Menu</button>
        </>
    )
}