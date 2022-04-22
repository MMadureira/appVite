import { useNavigate } from 'react-router-dom'
import './pag2.css'

export function Pag2() {
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

    function naviToPag3() {
        navi('/menu/pag3');
    }

    return (
        <div className='pag2'>
            <header>
                <h1>Página 2</h1>
                <p>Navengando pela Página 2</p>
                <div className="btns2">
                    <button onClick={naviToMenu}>Menu</button>
                    <button onClick={naviToPag1}>Página 1</button>
                    <button onClick={naviToPag3}>Página 3</button>
                    <button onClick={naviToHome}>Sair</button>
                </div>
            </header>
        </div>
    )
}