import styled from 'styled-components';

const Td = styled.td`
  text-align: center;
  padding: 10px;
`;

const FormItemClient = ({
  bankName,
  purchasePrice,
  downPayment,
  loanTerm,
  loanArp,
}) => {
  return (
    <>
      <Td>{bankName}</Td>
      <Td>{purchasePrice}</Td>
      <Td>{downPayment}</Td>
      <Td>{loanTerm}</Td>
      <Td>{loanArp}</Td>
    </>
  );
};

export default FormItemClient;
