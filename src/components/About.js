import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './Footer.css';

function About() {
  return (
    <div>
 
 <div className="title">TodoList project Example</div>

 <div className="backend">Backend : Java 8 + Spring boot</div>
 <div className="block1">
   Backend projektu obsahuje všetky CRUD operácie <br/>
   (Create, Read, Update, Delete), ktoré sa inicializujú <br/>
   pomocou requestov (POST, GET, PUT, DELETE)  <br/>
   v REST kontroléri, ktorý následne poskytuje JSON <br/>
   čitateľný ako pre užívateľa, tak pre Frontendovú <br/>
   aplikáciu. Spring-bootová aplikácia beží na <br/>
   serverovom kontajneri Tomcat 7.<br/>
   <a href="https://github.com/MartinBugar/ToDoList">
    Celý zdrojový kód na stiahnutie  
   <i class='fab fa-github' />
   </a>
   </div>




   <div className="backend">Frontend : ReactJS</div>
 <div className="block1">
   Vizuálna časť projektu je v písaná v reacte pomocou <br/>
   javascriptu. Dizajn a štýly sú spravené v HTML, <br/>
   CSS a Bootstrape. Aplikácia posiela requesty<br/>
   na backend, kde sú následne spracované.<br/>
   <a href="https://github.com/MartinBugar/MartyxTodoList">
    Celý zdrojový kód na stiahnutie  
   <i class='fab fa-github' />
   </a>
   </div>
        


    </div>
  );
}

export default About;
