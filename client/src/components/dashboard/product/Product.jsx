import React from 'react';

import SideBarMenu from '../SideBarMenu';



class Product extends React.Component {

    render() {
        return <div className='dashpage d-flex'>
            <SideBarMenu activeKey="0" />
            <div className='dashboardMain'>
            <h3>All Products details</h3>
            </div>
        </div>;
    }
}

export default Product;