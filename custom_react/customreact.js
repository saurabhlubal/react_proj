function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {

        if (prop === "children") continue;

        domElement.setAttribute(
            prop,
            reactElement.props[prop]
        )
    }

    container.appendChild(domElement)
}


const reactElement = {
    type: "div",

    props: {
        class: "card"
    },

    children: `
        <h1>Saurabh Lubal</h1>

        <h3>B.Tech IT Student</h3>

        <p>
            Learning React, JavaScript,
            Backend Development and exploring AI/ML.
        </p>

        <a href="https://youtube.com" target="_blank">
            Visit My YouTube
        </a>

        <button>
            Contact Me
        </button>
    `
}


const mainContainer = document.querySelector("#root")


customRender(
    reactElement,
    mainContainer
)
