import React, {useEffect, useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
function Cards() {

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
    <div className='cards' id='noticias'>
      <h1>Veja nossos destaques!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text={data.map((item,idx)=>{return item.conteudo})}
              label={data.map((item,idx)=>{return item.titulo})}
              path='/noticia'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Luxury'
              path='/noticia'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Mystery'
              path='/noticia'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adventure'
              path='/noticia'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              label='Adrenaline'
              path='/noticia'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
