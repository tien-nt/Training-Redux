import React, { Component } from 'react';
class Product extends Component {
  render() {
    return (
      <div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="thumbnail">
           <img src="https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600.jpg" alt="Iphone 6"/> 
            <div className="caption">
              <h3>Iphone 6 Plus</h3>
              <p>
                16.000.000 VNĐ
              </p>
              <button type="button" className="btn btn-success">Mua Hang</button>
            </div>
          </div>
        </div>
      
      </div> 
    );
  }
}

export default Product;