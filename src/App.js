import React, { Component } from 'react';
import TVTProductlist from './component/TVTProductlist';
import TVTProductAddOrEdit from './component/TVTProductAddOrEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'tạ văn thắng', id: 2210900063, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
      product:"",
      flag:true
    }
  }

  TVTHanldSubmit = (param) => {
    console.log("App:", param);
    //thêm vào bảng dữ liệu product
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  }
  TVTHandleEdit=(product)=>{
    console.log ("App-edit:",product);
    this.setState({
      product:product,
      flag:false
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>tạ văn thắng -Event Form - Render Data</h1>
        <hr />
        <TVTProductlist renderProducts={this.state.products}TVTOnEit={this.TVTHandleEdit} />
        <hr />
        <TVTProductAddOrEdit onSubmit={this.TVTHanldSubmit}
        renderProduct={this.state.product} renderFlag={this.state.flag}/>
      </div>
    );
  }
}

export default App;