document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("query").value.trim();
  const engine = document.getElementById("engine").value;

  if (!query) {
    alert("Inserisci un termine di ricerca o un sito web!");
    return;
  }

  // Se l'input sembra un URL
  if (query.includes(".") && !query.includes(" ")) {
    let url = query.startsWith("http") ? query : "https://" + query;
    window.open(url, "_blank");
  } else {
    // Altrimenti cerca con il motore selezionato
    let searchUrl = "";
    if (engine === "google") searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    else if (engine === "bing") searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    else if (engine === "duckduckgo") searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;

    window.open(searchUrl, "_blank");
  }
});
