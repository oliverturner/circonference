import styled, {css} from "styled-components";

const palette = css`
background: var(--brand);
color: white;
`

export const App = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const AppHeader = styled.div`
  flex: 0;

  ${palette};
`;

export const AppMain = styled.div`
  flex: 1;

  display: flex;
  background: palegoldenrod;
`;

export const AppFooter = styled.div`
  flex: 0;
  
  ${palette};
`;
