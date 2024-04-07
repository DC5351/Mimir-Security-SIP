// variables
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array to store news data
var newsDataArr = [];

// API key and endpoints
const API_KEY = "your API Key"; // You can get a  free API Key from NewsAPI (https://newsapi.org/)
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// Load news on window load
window.onload = function() {
    newsType.innerHTML="<h4></h4>"; // Initialize newsType element
    fetchHeadlines(); // Fetch headlines when window loads
};

// Event listener for search button click
searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>"; // Display search query
    fetchQueryNews(); // Fetch news based on query
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } 
    else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    
    displayNews();
}

// Function to fetch news based on query 
const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    // Fetch news data from API
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // Handle error
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>" // Display error message
        return;
    }

    displayNews(); // Display fetched news
}

// Function to display news
function displayNews() {

    newsdetails.innerHTML = ""; // Clear previous news details

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T"); // Split date and time
        
        // Create column div
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        // Create card div
        var card = document.createElement('div');
        card.className = "p-2";

        // Create image element
        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        // Create card body div
        var cardBody = document.createElement('div');
        
        // Create news heading element
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        // Create date heading element
        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        // Create description paragraph
        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        // Create link element
        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        // Append elements to card body
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        // Append elements to card
        card.appendChild(image);
        card.appendChild(cardBody);

        // Append card to column
        col.appendChild(card);

        // Append column to news details
        newsdetails.appendChild(col);
    });

}
