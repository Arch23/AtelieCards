export const expandFlavors = (productList) => {
    return productList.map((prod) => {
        if (prod.flavors.length != 0) {
            return prod.flavors.map((flavor) => {
                return {
                    name: `${prod.name}\r\n${flavor}`,
                    description: prod.description
                };
            });
        } else {
            return prod;
        }
    });
};

const productsToPrint = JSON.parse(window.localStorage.getItem('productsToPrint'));
export const productList = productsToPrint ? productsToPrint : [];
