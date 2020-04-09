import React, { Component } from 'react';
import { Row, Menu, Layout } from 'antd';
import 'antd/dist/antd.css'; 
import logo from '../../images/logo.svg';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: []
        }
    }

    componentDidMount() {
      const { selected, } = this.state;
      const self = this;
      window.addEventListener('scroll', function() {
        if (window.pageYOffset < 1115 && selected[0] !== '1') {
          self.setState({ selected: ['1']})
        };
        if (window.pageYOffset >= 1115 && window.pageYOffset < 4058 && selected[0] !== '2') {
          self.setState({ selected: ['2']})
        };
        if (window.pageYOffset >= 4058 && selected[0] !== '3') {
          self.setState({ selected: ['3']})
        }
      });
    }

    render() {
        const { Header, } = Layout;
        return(
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row justify="space-between">
            <img src={logo} alt="logo" height="55"/>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              selectedKeys={this.state.selected}
            >
              <Menu.Item key="1"><a href="#institute">Институт</a></Menu.Item>
              <Menu.Item key="2"><a href="#team">Команда</a></Menu.Item>
              <Menu.Item key="3"><a href="#experience">Опыт</a></Menu.Item>
              <Menu.Item key="4"><a href="#contacts">Контакты</a></Menu.Item>
            </Menu>
            </Row>
          </Header>
        )
    }
}
