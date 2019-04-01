import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{
    render(){
        return (
            <div>
                <form action="/" method="POST" name={this.props.formName}>
                    <fieldset>
                        <legend>{this.props.formTitle}</legend>
                        <input type="text" placeholder="Логин" name="login"/>
                        <input type="password" placeholder="Пароль" name="pass"/>
                        <button>Войти</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
