$.ajax({
  type: 'get',
  url: 'https://newsapi.org/v2/everything?q=apple&from=2023-04-18&to=2023-04-18&sortBy=popularity&apiKey=5860751229a14e009498e9590378bec7',

  success: function (response) {

    console.log(response.articles);

    for (var i = 0; i < response.articles.length; i++) {
      var title = response.articles[i].title;

      var img = response.articles[i].urlToImage;
      var desc = response.articles[i].description;

      var para = document.createElement("div");
      para.innerHTML = `<img class="news-img"
src=${img}/>
<div class="news-body">
<h2 class="news-title">${title}</h2>
<p class="news-description"> ${desc} &nbsp;&nbsp;
  
</p>
<a href='./news.html?news=${i}'  class='readbtn' id=${i} value=${i}>Read more</a>`;
      para.setAttribute("class", "news-card");
      document.getElementById("bg").appendChild(para);
      // $('#tbody').append(tablerow);


    }

    var btn = document.getElementsByClassName("readbtn");
    btn.addEventListener('click', (key) => {
      setNews();
    });

  },
  error: function (error) {
    console.log(error);
  }
})




