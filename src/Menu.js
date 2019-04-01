import React from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends React.Component{
    render(){
        const items = this.props.items.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.text}</a></li>
        });
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
