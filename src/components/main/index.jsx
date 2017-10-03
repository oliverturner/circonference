import * as React from "react";
import Loadable from "react-loadable";
import Media from "react-media";
import styled from "styled-components";

import Form from "./components/form";
import List from "./components/list";
import Spinner from "./components/spinner";

const MapLoader = Loadable({
  loader: () => import("./components/map"),
  loading: Spinner
});

const Main = styled.div`
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: [map] 1fr [list] minmax(auto, 450px);
`;

class MainWrapper extends React.Component {
  state = {
    formDisplayed: true
  }

  toggleForm = () => {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  };

  render() {
    const { style } = this.props;

    return (
      <Main style={style}>
        <Form displayed={this.state.formDisplayed} toggleForm={this.toggleForm} />
        <Content>
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <MapLoader style={{ gridColumn: "map", gridRow: 2 }} />
              ) : null}
          </Media>
          <List style={{ gridColumn: "list", gridRow: 2 }} />
        </Content>
      </Main>
    );
  }
}

export default MainWrapper;
