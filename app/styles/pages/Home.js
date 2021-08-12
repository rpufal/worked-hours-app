import styled from "styled-components";

export const MainPage = styled.main`
  display: flex;
  justify-content:center;
  align-items: center;
  
  .show-modal {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
  border: 0.5px solid ${props => props.theme.colors.text};
  }

  .show-modal:hover {
  color: ${props => props.theme.colors.secondary};
  border: 0.5px solid ${props => props.theme.colors.primary};
  }


.modal-background  {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    display: none;
    top: 0px;
    z-index: 2000;
    justify-content: center;
    align-items: center;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0)
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0)
    }
  }

  .modal-background.true {
    display: flex;
    flex-direction: column;
    animation: modal .3s;
  }

  .modal-background.true .modal {
    animation: modal .3s;
  }
`;