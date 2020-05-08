import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Price from "../components/Price";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      price: 0,
      present: []
    };
  }

  getHome = async () => {
    const { data } = await Axios.get(
      "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes"
    );

    const key = "id";
    const _id = this.props.match.params.id;
    const __id = { [key]: _id };
    console.log(__id);
    console.log(__id.id);

    console.log(data);
    this.setState({ homes: data });
    console.log(data[0].communityId);

    let price = 0;
    let present = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].communityId === __id.id) {
        price = price + data[i].price;
        present.push(data[i]);
      }
    }
    console.log(present);
    this.setState({ present: present });
    console.log(this.state.present);

    // avg price
    price = Math.round(price / this.state.present.length);
    console.log(this.state.present.length);

    console.log(price);
    this.setState({ price: price });
    console.log(this.state.price);
  };

  componentDidMount() {
    this.getHome();
  }

  render() {
    const { price } = this.state;
    const { present } = this.state;

    return (
      <div className="container">
        <div className="text-right">
          <Link
            to={{
              pathname: `/`
            }}
            className="btn btn-outline-warning"
          >
            Back
          </Link>
        </div>
        <div>
          <h3 className="text-center">Listing</h3>
          <p className="text-right alert alert-warning" role="alert">
            The average price of all the homes of this community : ${price}
          </p>
          <div>
            {present.map(p => (
              <Price
                key={p.id}
                id={p.id}
                communityId={p.communityId}
                price={p.price}
                area={p.area}
                type={p.type}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
