//variables
// const NewsAPI = require('newsapi');
const newsapi = '8ca904b74d7644968cfbd6f8cebe5695'
const searchInput = document.querySelector('.searchbar')
const searchButton = document.querySelector('.coolbutton')
const output = document.querySelector('.output')






//functions

function searchNews() {
    const newsUrl = `https://newsapi.org/v2/everything?q="${searchInput.value}"&apiKey=8ca904b74d7644968cfbd6f8cebe5695`

    $.ajax({
        url: newsUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
            output.innerHTML = ""
            for (let i = 0; i < data.articles.length; i++) {
                output.innerHTML += `

                <li class="listbox">
                    <div class="linkimgbox">
                        <img class="linkimg" src="${data.articles[i].urlToImage}" alt="Image Cant Display"</img></div>
                    <div class="textbox">
                        ${data.articles[i].title}
                
                        <p class = "paragraph">"${data.articles[i].description}"</p>
                        <p class = "paragraphsource">"${data.articles[i].source.name}"</p>
                        <a href="${data.articles[i].url}" class="linkshit" >${data.articles[i].url}</a>
                    </div>


                </li>
                `
            }


        },

        error: function (error) {
            console.log("erro")
        }




    })


}
















//eventlistener

searchButton.addEventListener(`click`, searchNews)