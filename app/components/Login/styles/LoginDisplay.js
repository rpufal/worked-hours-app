import styled from 'styled-components';

export const LoginDisplay = styled.div`
width: 30%;
min-width: 450px;
background-color: ${props=> props.theme.colors.contrast};
padding-top: 0.8%;
padding-bottom: 1.5%;
margin-bottom: 2rem;
border-top: 0.35rem solid ${props => props.theme.colors.primary};

.validation {
  margin-left: 5%;
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: red;
}

.message {
  margin-left: 5%;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
  margin-left: 5%;
}

input {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  padding: 5px;
  margin-left: 20px;
  margin-bottom: 10px;
}

input:focus {
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
}

  button {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
  border: 0.5px solid ${props => props.theme.colors.text};
  margin-left: 5%;
  }

  button:hover {
  color: ${props => props.theme.colors.primary};
  border: 0.5px solid ${props => props.theme.colors.primary};
  }

.login-button {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 0.5px solid ${props => props.theme.colors.text};
}

.login-button:hover {
  color: ${props => props.theme.colors.secondary};
  border: 0.5px solid ${props => props.theme.colors.secondary};
}
`;