import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const DashboardPage = (props) => (
    <div className="content-container">
        <span className="db--title">Content Store</span>

        <div className="bulk-orders">
            <span className="bo-title">
                Got bulk orders or almost similiar orders ? Fill the order brief
                in an excel sheet
            </span>
            <p className="bo-content">
                If you're wondering about any easy way to place orders in large
                numbers, we provide a way customized just for that.
                <br />
                Download our excel sheet, and fill the order brief in the
                prescribed format and submit. In case you need any help,{' '}
                <u>
                    we
                    <br /> are just a click away to assist you in placing your
                    order.
                </u>
            </p>
            <button className="btn btn--order">Order via Excel Sheet</button>
        </div>

        <div className="feature--cards">
            {(
                props.data.map((item) => (
                    <Card {...item} />
                ))
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return state;
  };

export default connect(mapStateToProps)(DashboardPage);
