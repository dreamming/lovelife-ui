import React, { Component } from "react";
import { withRouter } from "react-router";
import IndexWall from "../components/IndexWall";

// const IndexPage = () => (
//   <div>
//     <IndexWall />
//   </div>
// );
class IndexPage extends Component {
  // componentDidMount() {
  //   this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  // }

  // routerWillLeave = nextLocation => {
  //   return "确认要离开？";
  // };
  render() {
    return (
      <div>
        <IndexWall />
      </div>
    );
  }
}
export default IndexPage;
