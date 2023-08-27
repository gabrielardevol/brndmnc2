const unfoldLayout = async () => {
    document.querySelector("#loader").style.display = "block"
    try {
        await loadInflucard();
        // Pongo un timeout para que se aprecie el loader
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none"
            document.querySelector("#card-layout").style.width = "100%"
            document.querySelector("body").style.overflow = "hidden"


        }, 2000); 

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const foldLayout = () => {
    document.querySelector("#card-layout").style.width = "0%"
    document.querySelector("body").style.overflow = "auto"

}
