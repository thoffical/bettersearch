async function search() {
    const q = document.getElementById("searchInput").value;
    const resultsDiv = document.getElementById("searchResults");

    resultsDiv.innerHTML = "Searching...";

    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&pretty=1`;

    const res = await fetch(url);
    const data = await res.json();

    resultsDiv.innerHTML = "";

    if (data.RelatedTopics.length === 0) {
        resultsDiv.innerHTML = "No instant results. Try a more specific query.";
        return;
    }

    data.RelatedTopics.forEach(item => {
        if (item.Text && item.FirstURL) {
            const div = document.createElement("div");
            div.innerHTML = `<a href="${item.FirstURL}" target="_blank">${item.Text}</a>`;
            resultsDiv.appendChild(div);
        }
    });
}here
}
