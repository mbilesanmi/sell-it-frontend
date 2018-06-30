/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';
import moment from 'moment';

import { getMyOrders, cancelOrder } from '../../actions/orders.js';

import Loader from '../includes/Loader.jsx';
import { numberWithCommas } from '../../utils/helper.js';

class MyOrders extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      orders: {},
      loading: true
    };
  }

  componentWillMount() {
    this.props.getMyOrders()
      .then(() => {
        this.setState({ orders: this.props.orders, loading: false });
      })
      .catch(() => {
        toastr.error(this.props.message);
      });
  }

  render() {
    const { orders, loading } = this.state;

    if (_.isEmpty(orders)) {
      return <Loader />;
    }
    const pagination = (<ReactPaginate
      previousLabel={<i className="fas fa-chevron-circle-left" />}
      nextLabel={<i className="fas fa-chevron-circle-right" />}
      breakLabel={<a href="">...</a>}
      breakClassName="break-me"
      pageCount={orders.pagination.totalPages
        ? orders.pagination.totalPages : 0}
      marginPagesDisplayed={3}
      pageRangeDisplayed={orders.pagination.totalOrders > 9 ? 10
        : orders.pagination.totalPages}
      onPageChange={this.handlePageClick}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item next-button"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      activeClassName="active"
    />);
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>My Orders</h1>
          <p>This is the list of your orders and the status</p>
        </div>
        {!loading && orders.orders.length === 0 &&
        <h2>You have no orders yet</h2>
        }
        {!loading && orders.orders.length > 0 &&
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { orders.orders.map(order =>
                (
                  <tr key={order.id}>
                    <td className="product-col">
                      <div className="product">
                        <Link to="#">
                          <img
                            src={order.productImage}
                            width="100"
                            alt="Product"
                          />
                        </Link>
                        <h3 className="product-title">
                          <Link to="#">{order.productName}</Link>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">
                      {order.currency} {numberWithCommas(order.productPrice)}
                    </td>
                    <td className="quantity-col">
                      {order.buyerOrderStatus === 'in_progress'
                        ? 'Pending' : ''}
                      {order.buyerOrderStatus === 'cancelled'
                        ? 'Cancelled' : ''}
                      {order.sellerOrderStatus === 'approved'
                        ? 'Approved' : ''}
                      {order.sellerOrderStatus === 'Rejected'
                        ? 'Rejected' : ''}
                      {order.sellerOrderStatus === 'completed'
                        ? 'Completed' : ''}
                    </td>
                    <td className="total-col">
                      {moment(order.createdAt).fromNow()}
                    </td>
                    <td>
                      {order.buyerOrderStatus === 'in_progress' &&
                        <button
                          className="btn btn-primary"
                          onClick={() => this.props.cancelOrder(order)}
                        >
                          Cancel
                        </button>
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        }
        <nav aria-label="Page Navigation">
          {orders.pagination.totalPages > 1 ? pagination : null}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ message, orders }) => ({
  message, orders
});

export default connect(mapStateToProps, { getMyOrders, cancelOrder })(MyOrders);
