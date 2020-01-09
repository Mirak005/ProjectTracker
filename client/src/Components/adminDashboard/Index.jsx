import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import DashboardContent from './dashboardContent/index';

 class index extends Component {
     state={
         section:"Statistics",
     }
     handleRenderedSection=(section,e)=>{
         e.preventDefault();
         this.setState({
             section:section
         })
     }
    componentDidMount(){
        if(!this.props.authAdmin.isAuthenticated){
            this.props.history.push('/adminlogin');
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col top-navbar">
                        <Navbar handleRenderedSection={this.handleRenderedSection}/>
                    </div>
                </div>
                <div className="row sidebar-content">
                    <div className="col-lg-2 sidebar">
                        <Sidebar handleRenderedSection={this.handleRenderedSection}/>
                    </div>
                    <div className="col-lg-10 dashboard-content">
                        <DashboardContent section={this.state.section}/>
                    </div>
                </div>
                <div className="row sticky-footer">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Project Tracker 2020</span>
                    </div>
                </div>
            </div>
        )
    }
}
index.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    errors: state.errors
})
export default connect(mapStateToProps,{})(index);