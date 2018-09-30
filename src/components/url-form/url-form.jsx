import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Spinner } from '../../Utiles';
import './url-form.css';

class UrlForm extends Component {

    state = {
        theme: {
            background: '#FF0080',
            border: '',
            color: ''
        },
        youtubeUrl: '',
        videoId: '',
    }
    handleChangeTheme = (background, border, color = 'white') => {
        const theme = {
            background: background,
            border: border,
            color: color
        }
        this.setState({ theme: theme });
    }

    handleUrlChange = (event) => {
        this.setState({ youtubeUrl: event.target.value });
    }
    handleShowButton = () => {
        console.log(this.state.youtubeUrl);
        this.setState({ videoId: this.state.youtubeUrl.split('=')[1] });
    }
    handleClearButton = () => {
        this.setState({ videoId: '' });
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <div style={{ width: '100%', display: 'block' }}>
                            <div className="color-card btn" style={{ background: '#FF0080' }} onClick={this.handleChangeTheme.bind(this, '#FF0080', '2px solid #FF0080', '#ffffff')}></div>
                            <div className="color-card btn" style={{ background: '#07f2f2' }} onClick={this.handleChangeTheme.bind(this, '#07f2f2', '2px solid #07f2f2', '#ffffff')}></div>
                            <div className="color-card btn" style={{ background: '#000000' }} onClick={this.handleChangeTheme.bind(this, '#000000', '2px solid #000000', '#ffffff')}></div>
                            <div className="color-card btn" style={{ background: '#ffffff' }} onClick={this.handleChangeTheme.bind(this, '#ffffff', '2px solid #ffffff', '#000000')}></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{ color: this.state.theme.background }}>Convert Youtube To MP3</h1>
                        <br />
                        <input className="form-control" onChange={this.handleUrlChange} style={{ border: this.state.theme.border }} type="text" placeholder="ex: https://www.youtube.com/watch?v=78RPi887GIQ"></input>
                        <br />
                        <button className="btn" style={this.state.theme}>MP3</button>
                        <button className="btn" onClick={this.handleShowButton} style={this.state.theme}>Show</button>
                        <button className="btn" onClick={this.handleClearButton} style={this.state.theme}>Clear</button>
                    </div>
                </div>
                {this.state.videoId ?
                    <YouTube
                        videoId={this.state.videoId}
                        opts={opts}
                    />
                    : <Spinner style={{ background: this.state.theme.background }} />
                }

            </div>
        );
    }
}
export default UrlForm;