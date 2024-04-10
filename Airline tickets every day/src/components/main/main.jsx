

import './style.css'
import {useNavigate} from 'react-router-dom'

function Principal (){

    const navigate = useNavigate();

    return(
        <div>
            <div className="cabeçalho">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Cadastro</li>
                    <li onClick={() => navigate('/passagens')}>Passagens</li>
                </ul>
            </div>

            <main>
                <div className='ajuste'>
                    <h1 id='h1'>Passagens aéreas com o menor preço.</h1>

                    <h2 id='subtitulo'>Venha conhecer a <span id='span1'>Airline Tickets Every Day</span> e tenha os melhores preços!</h2>

                    <br /> <br />

                    <p id='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis quibusdam facere iusto <br /> ad dicta porro labore  dolore reprehenderit officiis atque, commodi, ex, ut perspiciatis harum <br /> similique reiciendis assumenda impedit. 
                        Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Earum dolorem itaque a laboriosam corrupti, animi ipsa ducimus magnam, maiores <br /> incidunt hic sunt? Odio fugiat numquam enim esse, veniam vero ipsa?
                    </p>

                    <br /> <br /> <br />

                    <button id='botao1' onClick={() => navigate('/passagens')}> Venha Conferir os Melhores Preços </button> 
                </div>
            </main>

        </div>

        
    )
};

export default Principal;