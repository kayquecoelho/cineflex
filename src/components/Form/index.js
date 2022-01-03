import { Container } from "./style";

export default function Form({ username, setUsername, cpf, setCpf }) {
  return (
    <Container>
      <p>Nome do comprador:</p>
      <input
        className="username"
        type="text"
        placeholder="Digite seu nome..."
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />

      <p>CPF do comprador:</p>
      <input
        className="cpf"
        type="text"
        placeholder="Digite seu CPF..."
        onChange={(event) => setCpf(event.target.value)}
        value={cpf}
      />
    </Container>
  );
}
