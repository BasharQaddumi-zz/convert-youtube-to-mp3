import React, { Component } from 'react';

import './url-form.css';

class UrlForm extends Component {

    state = {
        theme: {
            background: '#FF0080',
            border: '',
        }
    }
    handleChangeTheme = (background, border, color = 'white') => {
        const theme = {
            background: background,
            border: border,
            color: ''
        }
        this.setState({ theme: theme });
    }
    render() {
        return (
            <div className="container">
                <div className="color-card btn" style={{ background: '#FF0080' }} onClick={this.handleChangeTheme.bind(this, '#FF0080', '2px solid #FF0080')}></div>
                <div className="color-card btn" style={{ background: '#07f2f2' }} onClick={this.handleChangeTheme.bind(this, '#07f2f2', '2px solid #07f2f2')}></div>
                <div className="color-card btn" style={{ background: '#000000' }} onClick={this.handleChangeTheme.bind(this, '#000000', '2px solid #000000')}></div>
                <div className="color-card btn" style={{ background: '#ffffff' }} onClick={this.handleChangeTheme.bind(this, '#ffffff', '2px solid #ffffff')}></div>
                <h1 style={{ color: this.state.theme.background }}>Convert Youtube To MP3</h1>
                <br />
                <input className="form-control" style={{ border: this.state.theme.border }} type="text" placeholder="ex: https://www.youtube.com/watch?v=78RPi887GIQ"></input>
                <br />
                <button className="btn" style={this.state.theme}>MP3</button>
            </div>
        );
    }
}
export default UrlForm;