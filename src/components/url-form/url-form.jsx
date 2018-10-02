import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Spinner } from '../../Utiles';
import { isMobile } from "react-device-detect";
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
        const url = this.state.youtubeUrl
        console.log('url: ', url);
        this.setState({ videoId: this.state.youtubeUrl.split('=')[1] });
    }
    handleClearButton = () => {
        this.setState({ videoId: '' });
    }

    render() {
        let opts;

        if (isMobile) {
            opts = {
                height: 'auto',
                width: 'auto',
                playerVars: {
                    autoplay: 1
                }
            }

        } else {
            opts = {
                height: 'auto',
                width: 'auto',
                playerVars: {
                    autoplay: 1
                }
            }
        }

        console.log('render', this.state.theme.background);
        return (
            <div className="container">
                <div className="row">
                    <div className="oi">
                        <div className="color-card btn" style={{ background: '#FF0080' }} onClick={this.handleChangeTheme.bind(this, '#FF0080', '2px solid #FF0080', '#ffffff')}></div>
                        <div className="color-card btn" style={{ background: '#07f2f2' }} onClick={this.handleChangeTheme.bind(this, '#07f2f2', '2px solid #07f2f2', '#ffffff')}></div>
                        <div className="color-card btn" style={{ background: '#000000' }} onClick={this.handleChangeTheme.bind(this, '#000000', '2px solid #000000', '#ffffff')}></div>
                        <div className="color-card btn" style={{ background: '#ffffff' }} onClick={this.handleChangeTheme.bind(this, '#ffffff', '2px solid #ffffff', '#000000')}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{ color: this.state.theme.background }}>Convert Youtube To MP3</h1>
                        <br />
                        <input className="form-control" onChange={this.handleUrlChange} style={{ border: this.state.theme.border }} type="text" placeholder="ex: https://www.youtube.com/watch?v=78RPi887GIQ"></input>
                        <br />
                        <button className="btn" onClick={this.handleShowButton} style={this.state.theme}>Show and Convert</button>
                        <button className="btn" onClick={this.handleClearButton} style={this.state.theme}>Clear</button>

                    </div>
                </div>
                {this.state.videoId ?
                    <div>
                        <iframe title="mp3" width="220px" height="50px" style={this.state.theme} scrolling="no" className="btn" src={"https://www.download-mp3-youtube.com/api/?api_key=Mjg4NjAzODMw&format=mp3&video_id=" + this.state.videoId + "&button_color=" + this.state.theme.background + "&text_color=444444"}></iframe>
                        <br />
                        <YouTube
                            videoId={this.state.videoId}
                            opts={opts}
                        />
                    </div>
                    : <Spinner style={{ background: this.state.theme.background }} />
                }

            </div>
        );
    }
}
export default UrlForm;