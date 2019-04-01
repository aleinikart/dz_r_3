import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';

class App extends React.Component{
    render(){
        const menuItems = [
            {href: "/blog", text: "Блог"},
            {href: "/about", text: "О нас"},
            {href: "/contacts", text: "Свяжитесь с нами"},
        ];
        
        return (
            <div>
                <Login formTitle="Зарегистрируйтесь" formName="login"/>
                <Menu items={menuItems}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
