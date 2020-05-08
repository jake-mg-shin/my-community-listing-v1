import React from "react";
import axios from "axios";
import Community from "../components/Community";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      communities: []
    };
  }

  getCom = async () => {
    const { data } = await axios.get(
      "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities"
    );

    data.sort((a, b) => a.name.localeCompare(b.name));

    console.log(data);
    this.setState({ communities: data, isLoading: false });
    console.log(this.state.communities);
  };

  componentDidMount() {
    this.getCom();
  }

  render() {
    const { isLoading, communities } = this.state;

    return (
      <div className="container loader__container">
        {isLoading ? (
          <div className="loader">
            <span className="alert alert-dark" role="alert">
              Loading...
            </span>
          </div>
        ) : (
          <div className="row">
            {communities.map(com => (
              <Community
                key={com.id}
                id={com.id}
                name={com.name}
                imgUrl={com.imgUrl}
                group={com.group}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
