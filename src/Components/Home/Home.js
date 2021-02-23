import React from 'react'
import {Link} from "react-router-dom";

export default class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <h2>Главная</h2>

                <h3>Интересные ссылки</h3>
                <ul>

                    <li>
                        <p>
                            <strong>The official React documentation</strong>
                            <br/>
                            <a href='https://reactjs.org/docs/getting-started.html'>
                                https://reactjs.org/docs/getting-started.html</a>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Официальная документация по React</strong>
                            <br/>
                            <a href='https://ru.reactjs.org/docs/getting-started.html'>
                                https://ru.reactjs.org/docs/getting-started.html</a>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Чингисийн эртний морин дайчид React цайз руу дайрдаг</strong>
                            <br/>
                            <a href='https://mn.reactjs.org/docs/getting-started.html'>
                                https://mn.reactjs.org/docs/getting-started.html</a>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Bir otel için React web sitesi yazmak</strong>
                            <br/>
                            <a href='https://tr.reactjs.org/docs/getting-started.html'>
                                https://tr.reactjs.org/docs/getting-started.html</a>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>侍は新しいウェブフレームワークを学ぶ react</strong>
                            <br/>
                            <a href='https://ja.reactjs.org/docs/getting-started.html'>
                                https://ja.reactjs.org/docs/getting-started.html</a>
                        </p>
                    </li>

                </ul>

            </div>
        );
    }
}