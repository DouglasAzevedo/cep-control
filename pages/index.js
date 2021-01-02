import { useState }  from 'react'
import * as cep from 'cep-promise'

function Home() {
    const [cepNumber, setCepNumber] = useState(0);
    
    async function handleSubmit(e) {
        e.preventDefault();

        await useCepPromise(cepNumber);

        setCepNumber('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="cepNumber">Informe o cep</label>
                <input name="cepNumber"
                required
                value={cepNumber}
                onChange={e => setCepNumber(e.target.value)}/>
            </div>

            <button type="submit">Buscar</button>

        </form>

    )
}

function useCepPromise() {
    cep(7864000)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default Home;