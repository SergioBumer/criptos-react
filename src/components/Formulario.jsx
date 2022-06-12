import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from './Error';
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elige tu CriptoMoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${moneda}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado['Data'].map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      console.log(arrayCriptos);
      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, [moneda]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    if ([moneda, criptomoneda].includes("")) {
      console.log("ERROR");
      setError(true);
      return;
    }
    setMonedas({
      moneda, criptomoneda
    })
    setError(false);
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
