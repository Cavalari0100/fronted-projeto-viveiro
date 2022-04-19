import React, { useEffect, useState } from "react";
import './Noticia.css';
import axios from "axios";

import CardItem from "./CardItem";
function Noticia() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
            setData(result.data);
        };

        GetData();
    }, []);
    console.log(data)
    return (
        <div className="noticia">
            <div className="noticia__container">
            <table class="center">
                {data.map((noticia, idx) => {
                    return (
                    <tr>
                        <td>{noticia.titulo}</td>
                        <td>{noticia.conteudo}</td>
                        <td>{noticia.autor}</td>
                    </tr>
                )
                })}

            </table>
            </div>
        </div>
    )
}

export default Noticia; 