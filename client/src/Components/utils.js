const utils = {
    totalPriceCart: ( prop ) => {
        let costProduct = 0;
        prop.map( product => costProduct += parseInt(product.price) )
        return costProduct
    },
    addSomethingLocalStorage : (key, prop) => {
        localStorage.setItem(key, JSON.stringify(prop))
    },
    bringSomeLocalStorage : (key) => {
        let newValue = localStorage.getItem(key);   
        return JSON.parse(newValue)
    },
}

export default utils;