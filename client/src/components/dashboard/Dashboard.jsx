import React from 'react';

import { connect } from 'react-redux'; 

import * as Types from "../../store/types/authActions/types"

import DashBoardMain from './DashBoardMain';

import SideBarMenu from './SideBarMenu';


import Axios from "axios"
const getData = (id) => dispatch => {
    Axios.get(`/user/getuserdata/${id}`)
         .then(res => {
             console.log(res.data.userData)
            dispatch({
                type : Types.GET_USER_DATA, 
                payload : {
                    userdata : res.data.userData
                }
            })
         })
         .catch(error => {
        console.log(error)
         })
}


class Dashboard extends React.Component {

    componentDidMount(){
        this.props.getData(this.props.login._id)
    }

    render() {
 
        return (
           <div className='d-flex dashboard'>
           <SideBarMenu />

            <DashBoardMain />
           </div>
        );
    }
}
const mapStateToProps = state => {

    return {
        login : state.login.user
    }
}
export default connect(mapStateToProps, {getData})(Dashboard);

