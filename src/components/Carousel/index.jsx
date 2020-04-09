import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'; 
import './styles.css';
import first from '../../images/first.jpg';
import second from '../../images/second.jpg';
import third from '../../images/third.jpg';
import fourth from '../../images/fourth.jpg';
import fifth from '../../images/fifth.jpg';

export default class CustomCarousel extends Component {
    getWidth = () => {
        const width = document.documentElement.clientWidth;
        return width - 100;
    }

    render() {
        const photoWidth = this.getWidth();
        return (<>
                <Carousel autoplay>
                    <div>
                        <img src={first} alt="IRIT_RTF" width={photoWidth}/>
                    </div>
                    <div>
                        <img src={fifth} alt="IRIT_RTF" width={photoWidth}/>
                    </div>
                    <div>
                        <img src={third} alt="IRIT_RTF" width={photoWidth}/>
                    </div>
                    <div>
                        <img src={fourth} alt="IRIT_RTF" width={photoWidth}/>
                    </div>
                    <div>
                        <img src={second} alt="IRIT_RTF" width={photoWidth}/>
                    </div>
                </Carousel>
                </>
        )
    }
}