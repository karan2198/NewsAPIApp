let currentQuery = "sports"
let currentPage = 1
const fetchNews = async (page, q) => {
    console.log("Fetching News...");

    const url = `https://localhost:3000/news?q=${q}&page=${page}`;
    console.log(url);
    var req = new Request(url);
    let a = await fetch(req)
    let response = await a.json()
    console.log(JSON.stringify(response))
    
    console.log(response);
    let str = ""
    resultCount.innerHTML = response.totalResults;
    for (let item of response.articles) {
        str = str + `<div class="card my-4 mx-2" style="width: 18rem">
                <img src="${item.urlToImage}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">
                      ${item.description}
                    </p>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">Read Article</a>
                </div>
            </div>`
    }
    document.querySelector(".content").innerHTML = str
};

fetchNews(1, currentQuery)
document.getElementById('search').addEventListener("click", (e) => {
    e.preventDefault();
    let query = document.getElementById('searchInput').value;
    currentQuery = query;
    fetchNews(1, currentQuery)
})
document.getElementById('previous').addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage = currentPage - 1
        fetchNews(currentPage, currentQuery)
    }
})
document.getElementById('next').addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = currentPage + 1;
    fetchNews(currentPage, currentQuery)
})
document.getElementById('Tech').addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews(1, "Technology");
})
document.getElementById('sports').addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews(1, "Sports");
})
document.getElementById('business').addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews(1, "Business");
})
document.getElementById('weather').addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews(1, "Weather");
})
document.getElementById('health').addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews(1, "Health");
})