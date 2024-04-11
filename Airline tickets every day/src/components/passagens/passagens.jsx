
import './passagens.css'


function Passagens (){

    const lugaresNacional = [

        {id:1, name: 'Salvador', img: 'https://i.pinimg.com/564x/30/af/31/30af31bbaf902f1a638ebd4c310b348a.jpg', valor: 680 },

        {id:2, name: 'Rio de Janeiro ', img: 'https://i.pinimg.com/564x/53/e2/d6/53e2d64b967342031551f439213ed4ad.jpg', valor: 750  },

        {id:3, name: 'Curitiba', img: 'https://i.pinimg.com/564x/a2/dd/35/a2dd35c3dc33216c0d0383e7044ea9a7.jpg', valor: 710 },

        {id:1, name: 'Rio Grande do Sul', img: 'https://i.pinimg.com/564x/e1/8d/95/e18d95bac0c0080a47afce40d964a2f6.jpg', valor: 950  },
        
        {id:4, name: 'Alagoas', img: 'https://i.pinimg.com/564x/ad/3f/d9/ad3fd944aaf6e14848dddc1c4ca656b1.jpg', valor: 380 },

        {id:5, name: 'Santa Catarina', img: 'https://i.pinimg.com/564x/0f/be/2d/0fbe2daf0dd20f759e1fefdb87a49cec.jpg', valor: 1100 },

        {id:6, name: 'Amazonas', img: 'https://i.pinimg.com/564x/13/a0/86/13a086ce82f902354b7e696adc6a1405.jpg', valor: 380 },

        {id:7, name: 'Maranhão', img: 'https://i.pinimg.com/564x/f4/d2/0f/f4d20fc3527be33ff4d75f53cc674eb3.jpg', valor: 690 },

    ];

    const lugaresInternacional = [

        {id:1, name: 'França', img: 'https://i.pinimg.com/564x/da/c0/ec/dac0ec346411ab68eb481ecce43ade03.jpg', valor: 6800 },

        {id:2, name: 'Espanha', img: 'https://i.pinimg.com/564x/cb/b9/8a/cbb98aeb1b0cf2fe120c4dc5dc0b858e.jpg', valor: 3900 },

        {id:3, name: 'Canadá', img: 'https://i.pinimg.com/564x/bd/fc/02/bdfc028a5c018d25d3482b3e9b912e4a.jpg', valor: 4500 },

        {id:4, name: 'Portugal', img: 'https://i.pinimg.com/564x/95/62/a2/9562a2a18eab6d22e7382645e32a4db6.jpg', valor: 3500 },

        {id:5, name: 'Belgica', img: 'https://i.pinimg.com/564x/c0/e2/44/c0e2443950bdeea8a55413d4cbf24f77.jpg', valor: 5400 },
        
    ];

    return (
        <div>
            <nav className='header'>
                <ul>
                    <li>Airline Tickets Every Day</li>
                    <li>Confira os melhores preços</li>
                </ul>
            </nav>

            <div>
                <h1 id='title'>Passagens Nacional</h1>
                <br /><br /> <br />
            </div>


            { lugaresNacional
                
                .map((lugar) => (
                
                <div className='nacional' key={lugar.id}>
                    
                    
                    <img id='img' height={'200px'} width={'200px'} src={lugar.img} alt="" />
                    <p>{lugar.name}</p>
                    <p>R${lugar.valor}</p>
                    <button> Comprar </button>

                </div>

            ))}

            <br /> <br /> <br /> <br />

            <h1>Passagem Internacional</h1>

            { lugaresInternacional
            
                .map((lugares) => (

                <div className='internacional' key={lugares.id}>
                    
                    <p id='paragrafo_passagens'>{lugares.name}</p>
                    <img id='img1' height={'200px'} width={'200px'} src={lugares.img} alt="" />
                    <p>R${lugares.valor}</p>
                    <button>Comprar</button>

                </div>

            ))}

            <footer>
                <div>
                    <p>Celular:  98541 - 5214</p>
                </div>
            </footer>

        </div>

        
    )
};

export default Passagens;