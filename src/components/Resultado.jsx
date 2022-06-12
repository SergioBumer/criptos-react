import styled from "@emotion/styled";

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    background-color: #fff;
    text-align: center;
  }

  .valor {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Table>
      <tr>
        <td className="valor">Precio</td>
        <td>{PRICE}</td>
      </tr>
      <tr>
        <td className="valor">Precio más alto del día</td>
        <td>{HIGHDAY}</td>
      </tr>
      <tr>
        <td className="valor">Precio más bajo del día</td>
        <td>{LOWDAY}</td>
      </tr>
      <tr>
        <td className="valor">Variación últimas 24 horas</td>
        <td>{CHANGEPCT24HOUR}</td>
      </tr>
      <tr>
        <td className="valor">Última Actualización</td>
        <td>{LASTUPDATE}</td>
      </tr>
    </Table>
  );
};

export default Resultado;
