import dscegov from 'cegov-antd'
import "./Footer.css";
const {Footer} = dscegov();
export default (props) =>

<div>
<div className="Atendimento">
    <ul >
    <li>Central de atendimento - 155 
    <br/>
    Acessibilidade - 0800 275 0022</li>
</ul>
</div>
<div className="Local">
<ul>
    <li> <div className="Title">Palácio da Abolição </div>

    Av. Barão de Sturdart, 505, Fortaleza, CE<br></br>

    CEP: 60.120-013 </li> 

    <li><div className="Title">Horário de Funcionamento</div>

        Segunda a sexta - 09 às 18 horas
<br></br>
        Sabado - 09 às 12 horas
    </li> 
</ul>
</div>



<Footer />


</div>