import React from 'react';
import ReactDOM from 'react-dom';
const dev = require('./info').Developer;

class App extends React.Component{
    render(){
        return <div>
            <h1>Первое приложение</h1>
            <p>Всем привет!</p>
            </div>;
    }
}
console.log(`Имя: ${new dev('Артем', 29).name}, возраст: ${new dev('Артем', 29).age}`);

ReactDOM.render(<App/>, document.querySelector('#app'));
