import React from 'react'
import '../Styles/default.less'

export default function Main() {
    return (
        <main className="welcome">
            <h1>React + Typescript Boilerplate Works!</h1>
            <p>Begin working in:</p>
            <code><a>src</a>/<a>Components</a>/<a>Main.tsx</a></code>
            <p>
                <a className="warning">Warning!</a><br/>
                This is only a development serving and will not compile directly to files.<br/>
                To compile to a file use:
            </p>
            <code><a>yarn</a> <a>build</a></code>
        </main>
    )
}