import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/26415554?s=460&u=06e4523a1538bd5b765c8406e320f59a47a7235d&v=4" alt=""/>
        <div>
          <strong>Renan Oliveira</strong>
          <span>Lorem ipsum, dolor</span>
        </div>
      </header>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <br /><br />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae natus quisquam dolorum, eligendi quod officiis?</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt=""/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
