import React from 'react';


import DashBoardMain from './DashBoardMain';

import SideBarMenu from './SideBarMenu';

class Dashboard extends React.Component {

    render() {
        return (
           <div className='d-flex dashboard'>
           <SideBarMenu />

            <DashBoardMain />
           </div>
        );
    }
}

export default Dashboard;

