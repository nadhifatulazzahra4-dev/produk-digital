document.querySelectorAll(".product-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        window.location.href = "spotify://";

        setTimeout(() => {
            window.open("https://open.spotify.com/", "_blank");
        }, 1000);

    });

});