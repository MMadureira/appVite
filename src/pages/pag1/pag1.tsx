import { useNavigate } from 'react-router-dom'

export function Pag1(){
    const navi = useNavigate();

    function naviToMenu(){
        navi('/menu')
    }

    return(
        <>
            <h1>Página 1</h1>
            <button onClick={naviToMenu}>Menu</button>
        </>
    )
}