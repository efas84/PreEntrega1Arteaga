const products = [
    {
        id: '1',
        name: 'Tomahawk',
        price: 600,
        category: 'Especiales',
        img: 'https://cdn.shopify.com/s/files/1/0407/1850/0004/products/HalalTomahawk_600x.jpg?v=1620235864',
        stock: 25,
        description: 'Descripcion del corte'
    },
    {id: '2', name: 'Rib eye de puerco', price: 250, category: "Especiales", img: 'https://s.cornershopapp.com/product-images/314586.jpg?versionId=YZiFmGWOWn_yIKFjG9mvu0MGggEI0Zx2', stock: 25, description: 'Descripcion del corte'},
    {id: '3', name: 'Diezmillo choice', price: 280, category: "Res", img: 'https://cdn.shopify.com/s/files/1/0149/5836/2724/products/image_a9fb51a4-26b3-42db-a18d-224ae1d01583_1024x1024.jpg?v=1629080707', stock: 25, description: 'Descripcion del corte' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}