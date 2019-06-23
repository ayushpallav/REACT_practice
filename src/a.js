import React, { Component } from 'react';

class Home extends Component{

  state = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'sum':0
  }

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(e){
    e.preventDefault();
    this.setState({sum: this.state.a + this.state.b + this.state.c + this.state.d })
  }

  handleChange(value, product) {
    // e.preventDefault();
    // console.log(product);
    console.log(this.state);
    this.setState({
      product: value
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="left">
            <header>Items you can buy</header>
            <tbody className="products">
              <tr className="table_title">
                <th>Product</th>
                <th>Qty</th>
              </tr>
              <tr className="item">
                <th className="item_name">Product A</th>
                <th><input type="number" min="0" className="qty"  onChange={(e) => {this.setState({'a':parseInt(e.target.value)})}} value={this.state.a}/></th>
                <th><button type="button" className="update_butt" onClick={this.addItem}>Add</button></th>
              </tr>
              <tr className="item">
                <th className="item_name">Product B</th>
                <th><input type="number" min="0" className="qty" onChange={(e) => {this.setState({'b':parseInt(e.target.value)})}} value={this.state.b}/></th>
                <th><button type="button" className="update_butt" onClick={this.addItem} >Add</button></th>
              </tr>
              <tr className="item">
                <th className="item_name">Product C</th>
                <th><input type="number" min="0" className="qty" onChange={(e) => {this.setState({'c':parseInt(e.target.value)})}} value={this.state.c}/></th>
                <th><button type="button" className="update_butt" onClick={this.addItem} >Add</button></th>
              </tr>
              <tr className="item">
                <th className="item_name">Product D</th>
                <th><input type="number" min="0" className="qty" onChange={(e) => {this.setState({'d':parseInt(e.target.value)})}} value={this.state.d}/></th>
                <th><button type="button" className="update_butt" onClick={this.addItem} >Add</button></th>
              </tr>
            </tbody>
          </div>

          <div className="right">
            <header> Your Cart </header>
            <ul className="cart">
              {this.state.sum}
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
