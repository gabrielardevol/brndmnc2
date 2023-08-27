const setFlags = () => {
    const graph = document.querySelector(".col.ic-border.aud-gen-count:nth-of-type(2)")
    const images = graph.querySelectorAll("img")
    images.forEach((element) => {
        const fullString = element.src;
        const keyword = "assets";
        const startIndex = fullString.indexOf(keyword);
        const cutString = fullString.substring(startIndex);
        element.src = "https://www.emca-online.eu/" + cutString
      });
}


