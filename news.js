$.ajax({
  type: 'get',
  url: 'https://newsapi.org/v2/everything?q=apple&from=2023-04-18&to=2023-04-18&sortBy=popularity&apiKey=5860751229a14e009498e9590378bec7',

  success: function (response) {

    console.log(response.articles);
    function getCurrentURL() {
      return window.location.href
    }
    const urlString = getCurrentURL()
    let paramString = urlString.split('?')[1];

    let pair = paramString.split('=');
    // console.log(pair[1]);
    var i = pair[1];

    var title = response.articles[i].title;

    var img = response.articles[i].urlToImage;
    var desc = response.articles[i].description;
    var author = response.articles[i].author;
    var postedon = response.articles[i].publishedAt;
    var source = response.articles[i].source.name;
    var linkToSite = response.articles[i].url;

    var para = document.createElement("div");
    para.innerHTML = `<h2 class="news-title">${title}</h2>
      <img class="news-img"
src=${img}/>
<div class="news-body">

<p class="news-description"> ${desc} 
</p>
<div class='news-footer'>
<div class='news-author'>
<div> Author: ${author}</div>
<div>Posted on: ${postedon}</div>
</div>
<div class='news-source'>
<div>Source: ${source}</div>
<a href=${linkToSite}>Go to Source site</a> 
</div>
</div>`;
    para.setAttribute("class", "news-card");
    document.getElementById("bg").appendChild(para);

  },
  error: function (error) {
    console.log(error);
  }
})