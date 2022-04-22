import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';

import { userContext } from '../../Router';
import './menu.css'

export function Menu() {
    const navi = useNavigate();
    const { userValue, setUserValue } = useContext(userContext);

    function naviToHome() {
        navi('/')
    }

    function naviToPag1() {
        navi('/menu/pag1');
    }

    function naviToPag2() {
        navi('/menu/pag2');
    }

    function naviToPag3() {
        navi('/menu/pag3');
    }
    return (
        <div className='menu'>
            <header>
                <h1>Menu</h1>
                <p>Navegue entre as páginas</p>
                <div className='botoes'>
                    <button onClick={naviToPag1}>Página 1</button>
                    <button onClick={naviToPag2}>Página 2</button>
                    <button onClick={naviToPag3}>Página 3</button>
                    <button className='foto' onClick={naviToHome}> Sair</button>
                </div>
            </header>
        </div>
    )
}