import React, { Component } from 'react';
import { connect } from 'dva'

export default class SelectBar extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: "0" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.okHandler = this.okHandler.bind(this);
  }

  onInputChange(event) {
    this.setState({ selected: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.okHandler();
  }

  okHandler = () => {
    const { onOk } = this.props;
    onOk(this.state.selected);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-select">
        <select className="form-control" value={this.state.selected} onChange={this.onInputChange}>
          <option value="0">請選擇</option>
          <option value="1">國立臺北科技大學</option>
          <option value="2">臺北101</option>
          <option value="3">臺北火車站</option>
        </select>
        <span className="input-selected-btn">
          <button type="submit" className="btn btn-secondary">規劃路線</button>
        </span>
      </form>
    );
  }
}

/*function mapDispatchToProps(state){
  return;
}*/

//export default connect(null, mapDispatchToProps)(SelectBar);
