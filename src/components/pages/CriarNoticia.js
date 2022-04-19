import React , {useState} from "react";
import "./CriarNoticia.css";
import axios from "axios";
function CriarNoticia(props) {
    
    const [newPostagem, setNewPostagem] = useState({ titulo: '', conteudo: '',autor:'' });
    const url = 'http://localhost:3001/novapostagem';

    const InsertNewPostagem = (e) => {
        e.preventDefault();
        //debugger;
        const data = { titulo: newPostagem.titulo, conteudo: newPostagem.conteudo, autor: newPostagem.autor }
        axios.post(url, data);
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewPostagem({ ...newPostagem, [e.target.name]: e.target.value });
    }

    const attPage = (e) =>{
        window.location.reload();
    }

    return (
        <div style={{ padding: "4rem" }}>
            <div className='login__box'>
                <form onSubmit={InsertNewPostagem}>
                    <label for='email'>Titulo</label>
                    <input type="text" name="titulo" id="titulo" placeholder="Titulo da noticia" value={newPostagem.titulo} onChange={onChange} ></input>
                    <br />
                    <label for='senha'>Conteudo</label>
                    <input type="text" name="conteudo" id="conteudo" placeholder="Digite o conteudo da noticia" value={newPostagem.conteudo} onChange={onChange} ></input>
                    <br/>
                    <label for='senha'>Autor</label>
                    <input type="text" name="autor" id="autor" placeholder="Quem esta publicando"  value={newPostagem.autor} onChange={onChange} ></input>
                    <div><button style={{ background: "#3399ff" }} type="submit"  className="btn btn-secondary mb-1" onClick={attPage} >Cadastrar</button></div>
                </form>
            </div>
        </div>
    )
}
export default CriarNoticia;