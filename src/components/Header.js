import React from 'react';

// 无状态组件， 函数式组件， 无生命周期
const Header = (props) => {
    return ( 
        <div className = "container" >
            <div className = "row" >
                <div className = "col-xs-1 col-xs-offset-11" >
                    <h1 > {props.homeLink}</h1> 
                </div> 
            </div> 
        </div>
    );
}
export default Header;
