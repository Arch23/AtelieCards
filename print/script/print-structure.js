const pageWidthInmm = 297;
const pageHeightInmm = 209;
const pagePaddingInmm = 5;
const cardWidthInmm = 70;
const cardHeightInmm = 55;

export const createCard = (productInfo) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const brigadeiroImg = document.createElement('img');
    brigadeiroImg.classList.add('brigadeiro-logo');
    brigadeiroImg.src = 'img/brigadeiro.svg';
    cardDiv.appendChild(brigadeiroImg);

    const nameP = document.createElement('p');
    nameP.classList.add('text', 'product-name');
    nameP.textContent = productInfo.name;
    cardDiv.appendChild(nameP);

    const decorationImg = document.createElement('img');
    decorationImg.classList.add('decorations');
    decorationImg.src = 'img/decoration.svg';
    cardDiv.appendChild(decorationImg);

    if (productInfo.description) {
        const descriptionP = document.createElement('p');
        descriptionP.classList.add('text', 'product-description');
        if (productInfo.description.length > 50) {
            descriptionP.classList.add('product-description-small');
        }
        descriptionP.textContent = productInfo.description;
        cardDiv.appendChild(descriptionP);
    }

    return cardDiv;
};

export const createPage = () => {
    const page = document.createElement('section');
    page.classList.add('sheet', 'padding-5mm');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    page.appendChild(cardContainer);

    return page;
};

export const calculateCardsPerPage = () => {
    const workingWidth = pageWidthInmm - 2 * pagePaddingInmm;
    const workingHeight = pageHeightInmm - 2 * pagePaddingInmm;

    const rows = Math.floor(workingWidth / cardWidthInmm);
    const columns = Math.floor(workingHeight / cardHeightInmm);

    return {
        rows,
        columns
    };
};
