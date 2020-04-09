import React from 'react';
import './App.css';
import { Layout, BackTop, } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'antd/dist/antd.css'; 


function App() {
  return (
    <Layout className="layout">
      <BackTop />
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
