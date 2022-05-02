// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar").innerHTML = navbar()

import {searchNews, append} from "./fetch.js"

let search = (e) => {
    if (e.key == "Enter")
    {
        let value = document.getElementById("query").value
        searchNews(value).then((data) => {
            console.log(data)
            let container = document.getElementById("results")
            container.innerHTML = null

            append(data.articles, container)
        })
    }
}

document.getElementById("query").addEventListener("keydown", search)

let sidebars = document.getElementById("sidebar").children

let cSearch = () => {
    
}

