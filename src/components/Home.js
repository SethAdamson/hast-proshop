import React, {Component} from 'react';
import {connect} from 'react-redux';
import speedoGrey from '../media/speedo-logo-gray_red.png';


class Home extends Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div>
                <img className='speedo-logo' src={speedoGrey} alt='Speedo' />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Home);