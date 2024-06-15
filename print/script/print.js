import {productList, expandFlavors} from "./memory.js";
import { calculateCardsPerPage, createCard, createPage } from "./print-structure.js";

const createPagesAndCards = () => {
    const mainContainer = document.getElementById("main-container");
    const { rows, columns } = calculateCardsPerPage();
    const cardPerPage = rows * columns;
    const expandedProductList = expandFlavors(productList).flat();
    const pagesNeeded = Math.ceil(expandedProductList.length / cardPerPage);

    for (let i = 0; i < pagesNeeded; i++) {
        const page = createPage();
        const lower = i * cardPerPage;
        const upper = (i + 1) * cardPerPage > expandedProductList.length ? expandedProductList.length : (i + 1) * cardPerPage;
        const slice = expandedProductList.slice(lower, upper);

        slice.forEach(prod => {
            page.firstChild.appendChild(createCard(prod));
        });

        mainContainer.appendChild(page);
    }
};

createPagesAndCards();
