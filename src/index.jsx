import Post from "@models/post"
import './styles/styles.css'
import json from './assets/json'
import WebpackLogo from '@/assets/webpack-logo' // by alias
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import * as $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import React from 'react'
import {render} from 'react-dom'

const post = new Post("Webpack Post title", WebpackLogo)
// $('.json').html(post.toString());

console.log("Post to String", post.toString())
console.log("JSON:", json)
console.log("XML", xml)
console.log("CSV", csv)


const App = () => (
    <main className="container">
        <h1>Webpack test</h1>
        <hr/>
        <section className="logo">
        </section>
        <section className="json"></section>
        <section className="box">
            <h2>Less</h2>
        </section>
        <section className="card">
            <h2>Scss</h2>
        </section>
    </main>
)

render(<App/>, document.getElementById('app'))