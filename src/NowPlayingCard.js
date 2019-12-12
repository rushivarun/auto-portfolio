import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";


const SpotifyApi = new SpotifyWebApi();


class NowPlayingCard extends Component {
    
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            SpotifyApi.setAccessToken(token);
        }

        this.state = {
            logged_in : token ? true : false,
            now_playing : {
                name : 'not checked',
                albumArt : ''
            }
        }
        console.log(params);
      }
      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
      }

      getNowPlaying () {
          SpotifyApi.getMyCurrentPlaybackState().then((response) => {
              this.setState({
                  now_playing : {
                      name : response.item.name,
                      albumArt : response.item.album.images[0].url
                  }
              })
          })
      }

      

    render() {
        return (
            <div className="tc bg-light-red fl w-50 ba grow ma3 br4 sh4">
                <a href='http://localhost:8888/login'>Login to spotify</a>
                <div>
                    Now playing : {
                        this.state.now_playing.name
                    }
                </div>
                <div>
                    <img src={this.state.now_playing.albumArt} style={{height:250, width:300}} />
                </div>

                {this.state.logged_in &&
                    <button onClick={() => this.getNowPlaying()}>
                        Get now playing....
                    </button>
                    
                }
            </div>
        )
    }
}

export default NowPlayingCard;