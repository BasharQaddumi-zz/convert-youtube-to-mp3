import React, { Component } from 'react'
import { UrlForm, Footer, Background } from '../../components';
import './view.css'

class View extends Component {
    render() {
        return (
            <div>
                <Background/>
                <UrlForm />
                <Footer/>
            </div>
        )
    }
}
export default View;
