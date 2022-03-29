import React from 'react';

import SideBarMenu from '../SideBarMenu';



class Setting extends React.Component {

    render() {
        return <div className='dashpage d-flex'>
            <SideBarMenu activeKey="1" />
            <div className='dashboardMain'>
            <h3>Setting Page</h3>
            </div>
        </div>;
    }
}

export default Setting;