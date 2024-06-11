export const expandFlavors = (productList) => {
    return productList.map(prod => {
        if (!!prod.flavors) {
            return prod.flavors.map(flavor => {
                return {
                    "name":`${prod.name}\r\n${flavor}`, 
                    "description": prod.description
                }
            });
        } else {
            return prod;
        }
    });
};

export const productList = [
    {
        "name": "Maçã do Amor",
        "description": "R$ 7,00"
    },
    {
        "name": "Bolo em Fatia",
        "description": "R$ 12,00",
        "flavors": ["Brigadeiro", "Red Velvet", "Cenoura", "Abacaxi c/ Coco", "Surpresa de Uva"]
    },
    {
        "name": "Brownie",
        "description": "R$ 6,00"
    },
    {
        "name": "Slice Cake",
        "description": "R$ 15,00"
    },
    {
        "name": "Bombom de morango",
        "description": "R$ 6,00"
    },
    {
        "name": "Coxinha de morango",
        "description": "R$ 6,00"
    },
    {
        "name": "Banoffe",
        "description": "R$ 8,00"
    },
    {
        "name": "Tortinha de Limão",
        "description": "R$ 8,00"
    },
    {
        "name": "Caseirinhos",
        "description": "R$ 14,00"
    },
    {
        "name": "Cupcake",
        "description": "R$ 6,00",
        "flavors": ["Brigadeiro", "Red Velvet", "Floresta Negra", "Cenoura", "Uva Verde", "Frutas Vermelhas"]
    },
    {
        "name": "Camafeu de nozes",
        "description": ""
    },
    {
        "name": "Tacinha",
        "description": "",
        "flavors": ["Cereja", "Uva", "Maracujá", "Physalis"]
    },
    {
        "name": "Coração Elegance Branco",
        "description": "",
        "flavors": ["Maracujá", "Frutas Vermelhas", "Pistache"]
    },
    {
        "name": "Piramide Elegance",
        "description": "",
        "flavors": ["Abacaxi c/ Coco", "Damasco c/ Coco", "Pistache", "Limão Siciliano"]
    },
    {
        "name": "Mini Cake",
        "description": "",
        "flavors": ["Coco Branco", "Coco Queimado", "Frutas Vermelhas", "Maracujá", "Nozes", "Limão"]
    },
    {
        "name": "Copo da Felicidade",
        "description": "R$ 12,00",
        "flavors": ["Banoffe", "Morango Ninho", "Surpresinha de Uva", "Brigadeiro", "Sensação", "Tortinha de Limão"]
    },
    //brigadeiros
    {
        "name": "Tradicional",
        "description": ""
    },
    {
        "name": "Sensação Belga",
        "description": "massa de cacau recehado com brigadeiro sensação"
    },
    {
        "name": "Pamonha",
        "description": "massa harmonizada c/ milho finalizado c/ coco branco"
    },
    {
        "name": "Pé de Moça",
        "description": "massa caramelizada c/ amendoim e açúcar premium"
    },
    {
        "name": "Paçoquinha",
        "description": "massa de amendoim finalizado c/ amendoim em pedaços"
    },
    {
        "name": "Romeu e Julieta",
        "description": "deliciosa massa branca recheada c/ queijo e goiabada cascão"
    },
    {
        "name": "Coco Supremo",
        "description": "massa de coco, recheado com cocada cremosa"
    },
    {
        "name": "Capim Limão",
        "description": "massa branca infusionada c/ chá de capim limão"
    },
    {
        "name": "Cereja",
        "description": "massa branca com pedaços de cereja chilena"
    },
    {
        "name": "Perolado Branco",
        "description": "brigadeiro branco c/ flocos belga"
    },
    {
        "name": "Frutas Vermelhas belga",
        "description": ""
    },
    {
        "name": "Prestígio Elegance",
        "description": "recheado c/ casca belga e coco cremoso"
    },
    {
        "name": "Banana Caramelizada",
        "description": "massa branca harmonizada com caramelo e bananas"
    }
];
