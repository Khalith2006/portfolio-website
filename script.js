const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const response = await fetch("http://localhost:5000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    });

    const data = await response.json();

    alert(data.message);

    contactForm.reset();

});