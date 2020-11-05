import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './Footer.css';
import Footer from './Footer';

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
    Celý zdrojový kód na stiahnutie  &nbsp;
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
    Celý zdrojový kód na stiahnutie  &nbsp;
   <i class='fab fa-github' />
   </a>
   </div>

   <div className="backend">Databáza MySql</div>
 <div className="block1">
   Projekt využíva na uchovávanie dát databázu <br/>
   MySql, ktorá je umiestnená na servery. Pre prístup <br/>
   k údajom do databázy je pomocou JDBC. SQL kód je <br/>
   k dispoziícií na stiahnutie v repozitáry s backendom<br/>

   </div>

   <div className="backend">
      Celý postup aj s vysvetlením bude v <br/>
      pripravovanom kurze na mojom  <br/>
      youtube kanály   <br/>
      <a href="https://www.youtube.com/channel/UCtY-s6HY_Ux5Y0iOAgLag6w?view_as=subscriber">  
      KURZY PROGRAMOVANIA &nbsp;
   <i class='fab fa-youtube' />
   </a>
   </div>
        

   <Footer />
    </div>
    
  );
}

export default About;
