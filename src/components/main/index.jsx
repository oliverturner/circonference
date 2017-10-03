import * as React from "react";
import Loadable from "react-loadable";
import Media from "react-media";
import styled from "styled-components";

// import Form from "./components/form";
import List from "./components/list";
import Spinner from "./components/spinner";

const MapLoader = Loadable({
  loader: () => import("./components/map"),
  loading: Spinner
});

const Main = styled.div`overflow: hidden;`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr minmax(auto, 450px);
  
  height: 100%;
`;

class MainWrapper extends React.Component {
  state = {
    formDisplayed: true
  };

  toggleForm = () => {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  };

  render() {
    // <Form displayed={this.state.formDisplayed} toggleForm={this.toggleForm} />
    return (
      <Main>
        <Content>
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? <MapLoader style={{ gridArea: "1/1/1/1" }} /> : null}
          </Media>
          <List style={{ gridArea: "1/2/1/2" }} />
        </Content>
      </Main>
    );
  }
}

export default MainWrapper;
