import Head from 'next/head';
import React from 'react'; 
import  Footer  from './Footer';
import  Navbar  from './Navbar';

const Layout = ({children}) => {
    let style1 = {
        maxWidth : '1200px', 
        position: 'relative', 
        margin: 'auto'
    }
    let style2 = {
        position : 'relative'
    }
    let style3 = {
        position : 'relative'
    }
    return (
        <>
            <div style={style2}>
                <Head>
                    <title>JS Mastery Store</title>
                </Head>
                <header>
                    <div style={style3}>
                    <Navbar />  
                    </div>
                </header>
                <main style={style1}>{children}</main>
                <footer style={style3}>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout; 