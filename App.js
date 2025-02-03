import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'


const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyXc1ESxKcHM2bxVwGhNxWNVeBrxW1xq76Yk0shwH4oHnnB7bR'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const Applayout =()=>{
    return (
        <div>
            <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)