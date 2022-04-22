import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';

import {
    RiDeleteBinLine,
    BsFillFileEarmarkPlusFill,
    GrUpdate,
    GrDocumentUpdate
} from 'react-icons/all';

import { userContext } from '../../Router';
import { api } from '../../services/api';
import './pag1.css'

type repositorioType = {
    cod: number;
    nome: string;
    descri: string;
    qtda: string;
    fabricante: string;
    datahora: string;
}

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

    function ShowProds() {
        const [data, setData] = useState([]);
    
        const { userValue, setUserValue } = useContext(userContext);
    
        async function seachDataProds() {
            const resp = await api.get('produtos');
            setData(resp.data);
        }
    
        useEffect(() => {
            seachDataProds();
        }, []);

        return (
            <>
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
                <div className='tableList'>
                <table className='tbProds'>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Fabricante</th>
                            <th>Data / Hora</th>
                            <th>Controles</th>
                        </tr>
                    </thead>
                    <tbody className='tbodyList'>
                        {data.map((row: repositorioType) => (
                            <tr key={row.cod}>
                                <td>{row.cod}</td>
                                <td>{row.nome}</td>
                                <td>{row.descri}</td>
                                <td>{row.qtda}</td>
                                <td>{row.fabricante}</td>
                                <td>{row.datahora}</td>
                                <td>
                                    <div className='containerIcon'>
                                        <RiDeleteBinLine />
                                        <BsFillFileEarmarkPlusFill />
                                        <GrUpdate />
                                        <GrDocumentUpdate />
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    );
}
    return (
        <>
            {ShowProds()}
        </>
    )
}

