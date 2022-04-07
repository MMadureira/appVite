import { useNavigate } from 'react-router-dom'

export function Pag2(){
    const navi = useNavigate();

    function naviToMenu(){
        navi('/menu')
    }

    return(
        <>
            <h1>Página 2</h1>
            <button onClick={naviToMenu}>Menu</button>
        </>
    )
}