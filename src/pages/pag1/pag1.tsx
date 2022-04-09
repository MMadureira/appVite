import { useNavigate } from 'react-router-dom'
import './pag1.css'

export function Pag1() {
    const navi = useNavigate();

    function naviToHome() {
        navi('/')
    }

    function naviToMenu() {
        navi('/menu')
    }

    function naviToPag2() {
        navi('/menu/pag2');
    }

    function naviToPag3() {
        navi('/menu/pag3');
    }

    return (
        <div className='pag1'>
            <header>
                <h1>Página 1</h1>
                <p>Navegando pela Página 1</p>
                <div className='btns'>
                    <button onClick={naviToMenu}>Menu</button>
                    <button onClick={naviToPag2}>Página 2</button>
                    <button onClick={naviToPag3}>Página 3</button>
                    <button onClick={naviToHome}>Sair</button>
                </div>
            </header>
        </div>
    )
}