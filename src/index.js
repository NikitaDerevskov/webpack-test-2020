import Post from "@models/post"
import './styles/styles.css'
import json from './assets/json'
import WebpackLogo from '@/assets/webpack-logo' // by alias
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import * as $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post("Webpack Post title", WebpackLogo)
$('.json').html(post.toString());

console.log("Post to String", post.toString())
console.log("JSON:", json)
console.log("XML", xml)
console.log("CSV", csv)
