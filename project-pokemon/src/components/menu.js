// src/components/Menu.js

import React, { useState } from 'react';
import './Menu.css';
import historiaIcon from '../img/historia.png';
import sistemaIcon from '../img/sistema.png';
import registroIcon from '../img/registro.png';
import loginIcon from '../img/login.png';

const Menu = () => {
  const [visible, setVisible] = useState(false); // Estado para controlar a visibilidade do menu
  const [showHistorySubmenu, setShowHistorySubmenu] = useState(false); // Estado para controlar a visibilidade do submenu de História

  return (
    <div
      className="menu-container"
      onMouseEnter={() => setVisible(true)} // Mostra o menu quando o mouse entra na área do menu
      onMouseLeave={() => {
        setVisible(false); // Esconde o menu quando o mouse sai da área do menu
        setShowHistorySubmenu(false); // Esconde o submenu de História quando o mouse sai da área do menu
      }}
    >
      <div className={`menu ${visible ? 'visible' : ''}`}> {/* Classe condicional para mostrar o menu */}
        {/* Opção de História */}
        <div
          className="menu-item"
          onMouseEnter={() => setShowHistorySubmenu(true)} // Mostra o submenu de História quando o mouse entra na opção de História
          onMouseLeave={() => setShowHistorySubmenu(false)} // Esconde o submenu de História quando o mouse sai da opção de História
        >
          <img src={historiaIcon} alt="História" className="menu-icon" /> {/* Ícone de História */}
          <span className={`menu-text ${showHistorySubmenu ? 'visible' : ''}`}>História</span> {/* Texto de História visível apenas com submenu */}
          {showHistorySubmenu && (
            <div className="submenu"> {/* Submenu de Lendas */}
              <div className="submenu-item">Lendas</div>
            </div>
          )}
        </div>
        {/* Opção de Sistema */}
        <div className="menu-item">
          <img src={sistemaIcon} alt="Sistema" className="menu-icon" /> {/* Ícone de Sistema */}
          <span className={`menu-text ${visible ? 'visible' : ''}`}>Sistema</span> {/* Texto de Sistema */}
        </div>
        {/* Opção de Cadastre-se */}
        <div className="menu-item">
          <img src={registroIcon} alt="Cadastre-se" className="menu-icon" /> {/* Ícone de Cadastre-se */}
          <span className={`menu-text ${visible ? 'visible' : ''}`}>Cadastre-se</span> {/* Texto de Cadastre-se */}
        </div>
        {/* Opção de Entre */}
        <div className="menu-item">
          <img src={loginIcon} alt="Entre" className="menu-icon" /> {/* Ícone de Entre */}
          <span className={`menu-text ${visible ? 'visible' : ''}`}>Entre</span> {/* Texto de Entre */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
