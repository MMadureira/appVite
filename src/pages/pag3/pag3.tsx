import { useNavigate } from 'react-router-dom'
import './pag3.css'

export function Pag3() {
    const navi = useNavigate();

    function naviToHome() {
        navi('/')
    }

    function naviToMenu() {
        navi('/menu')
    }

    function naviToPag1() {
        navi('/menu/pag1');
    }

    function naviToPag2() {
        navi('/menu/pag3');
    }

    return (
        <div className='pag3'>
            <header>
                <h1>Página 3</h1>
                <p>Navegando pela Página 3</p>
                <div className="btns3">
                    <button onClick={naviToMenu}>Menu</button>
                    <button onClick={naviToPag1}>Página 1</button>
                    <button onClick={naviToPag2}>Página 2</button>
                    <button onClick={naviToHome}>Sair</button>
                </div>
            </header>
        </div>
    )
}