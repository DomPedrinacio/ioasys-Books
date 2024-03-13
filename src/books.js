// books.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './books.css';
import Livro1 from './imgs/livro1.png';
import Livro2 from './imgs/livro2.png';
import Livro3 from './imgs/livro3.png';
import Livro4 from './imgs/livro4.png';
import Livro5 from './imgs/livro5.png';
import Livro6 from './imgs/livro6.png';
import Livro7 from './imgs/livro7.png';
import Livro8 from './imgs/livro8.png';
import Livro9 from './imgs/livro9.png';
import Livro10 from './imgs/livro10.png';

const livrosData = [
    { id: 1, imagem: Livro1, titulo: 'Crossing The Chasm', autor: 'Geoffrey A. Moore', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 2, imagem: Livro2, titulo: 'Change By Design', autor: 'Tim Brown', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 3, imagem: Livro3, titulo: 'The Making of a Manager', autor: 'Julie Zhuo', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 4, imagem: Livro4, titulo: "Don’t Make me Think", autor: 'Steve Krug', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 5, imagem: Livro5, titulo: 'Web Design 101', autor: 'Mary Johnson, Wiliam Pitt', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 6, imagem: Livro6, titulo: 'Hooked', autor: 'Nir Eyal Ryan Hoover', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 7, imagem: Livro7, titulo: 'The Design of Everyday Things', autor: 'Don Norman', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 8, imagem: Livro8, titulo: 'Creative Selection', autor: 'Ken Kocienda', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 9, imagem: Livro9, titulo: 'Sprint', autor: 'Jake Knapp', descricao: '150 páginas Editora Loyola Publicado em 2020' },
    { id: 10, imagem: Livro10, titulo: 'The Power of Habit', autor: 'Charles Duhigg', descricao: '150 páginas Editora Loyola Publicado em 2020' }
];

function Books() {
    const navigate = useNavigate();
    const [livros, setLivros] = useState(livrosData);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100;

    const handleLogout = () => {
        navigate('/login');
    };

    const handleCardClick = (livroId) => {
        setLivros((livros) =>
            livros.map((livro) =>
                livro.id === livroId ? { ...livro, ampliado: !livro.ampliado } : livro
            )
        );
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className="books-container">
            <div className='header_books'>
                <div className='left-content'>
                    <h1 className='logo_books'>ioasys</h1>
                    <p className='title_books'>Books</p>
                </div>
                <div className='right-content'>
                    <p className='welcome'>Bem Vindo, <strong>Pedro</strong></p>
                    <button className='exit' onClick={handleLogout}>
                        <strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg>
                        </strong>
                    </button>
                </div>
            </div>

            <div className="layout">
                {livros.map((livro) => (
                    <div key={livro.id} className={`card ${livro.ampliado ? 'ampliado' : ''}`} onClick={() => handleCardClick(livro.id)}>
                        <img className='livro' src={livro.imagem} alt={`Capa do Livro ${livro.titulo}`} />
                        <div className='text-content'>
                            <h3 className="tituloLivro">{livro.titulo}</h3>
                            <p className='subtituloLivro'>{livro.autor}</p>
                            {livro.ampliado && <p className='description'>{livro.descricao}</p>}
                        </div>
                    </div>
                ))}
            </div> <br /> <br />
            <div className="footer">
                {currentPage > 0 && (
                    <button className='directions' onClick={handlePrevPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="go" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>
                )}
                <p className="pages">Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong></p>
                {currentPage < totalPages && (
                    <button className='directions' onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="go" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Books;