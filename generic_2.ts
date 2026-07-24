// Generic Function


function getFirstProduct<T>(products: T[]): T {
    return products[0];
}

// Generic Function returning an object
function packOrder<T>(item: T): { product: T; orderDate: Date } {
    return {
        product: item,
        orderDate: new Date()
    };
}



// 1. Working with Product Names (Strings)
const productNames = ["Laptop", "Mobile", "Headphones"];

const firstProduct = getFirstProduct<string>(productNames);

console.log(`First Product: ${firstProduct.toUpperCase()}`);

// 2. Working with Prices (Numbers)
const prices = [55000, 25000, 1500];

const firstPrice = getFirstProduct<number>(prices);

console.log(`First Price: ₹${firstPrice}`);

// 3. Working with Custom Objects
interface Product {
    id: number;
    name: string;
    price: number;
}

const laptop: Product = {
    id: 101,
    name: "Dell Inspiron",
    price: 65000
};

const packedProduct = packOrder<Product>(laptop);

console.log(`Packed Product: ${packedProduct.product.name}`);
console.log(`Price: ₹${packedProduct.product.price}`);
console.log(`Order Date: ${packedProduct.orderDate}`);

// Type Inference (No need to mention <string>)
const autoProduct = getFirstProduct(productNames);

console.log(`Auto Inferred Product: ${autoProduct}`);

// Generic Identity Function
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(100));
console.log(identity<string>("Welcome"));