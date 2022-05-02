let searchNews = async (value) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)

        let data = await res.json()

        return data
    }
    catch (err)
    {
        console.log(err)
    }
}
let append = (data, results) => {
    data.map(({ title, urlToImage, description }) =>{
        // console.log("arti--", title)
            
        let div = document.createElement("div")
         let div2 = document.createElement("div")
            let img = document.createElement("img")
            let h3 = document.createElement("h3")
            let p = document.createElement("p")

            img.src = urlToImage
            h3.innerText = title
            p.innerText = description

            div.append(img, h3, p)
            results.append(div)
        })

}
export {searchNews, append}