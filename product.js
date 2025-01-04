import { db, getDocs, collection } from "./firebaseConfig.js";

const cloudName = 'dx2vrqvc5'; // Cloudinary cloud name

const product = async () => {
    const querySnapshot = await getDocs(collection(db, "Product Detail")); // Fetch Firestore documents
    const productContainer = document.getElementById("product-container"); // Assuming you have a container div in your HTML

    querySnapshot.forEach((doc) => {
        const productData = doc.data(); // Get data for each document

        // Create product card container
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'col-md-3');
        

        // Create product image
        const productImage = document.createElement('img');
        productImage.src = `https://res.cloudinary.com/${cloudName}/image/upload/${productData.image}`; // Cloudinary image URL
        productImage.alt = productData.name;
        productImage.classList.add('product-image');

        // Create product name
        const productName = document.createElement('h3');
        productName.classList.add('product-title');
        productName.textContent = productData.name;

        // Create product description
        const productDescription = document.createElement('p');
        productDescription.classList.add('product-description');
        productDescription.textContent = productData.description;

        // Create product potency
        const productPotency = document.createElement('p');
        productPotency.classList.add('product-potency');
        productPotency.textContent = `Potency: ${productData.potency}`;

        // Create product format (quantity)
        const productFormat = document.createElement('p');
        productFormat.classList.add('product-format');
        productFormat.textContent = `Quantity: ${productData.quantity}`;

        // Create product price
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `Price: $${productData.price}`;

        // Create shop now button
        const shopNowButton = document.createElement('a');
        shopNowButton.classList.add('shop-now-btn');
        shopNowButton.href = '#'; // Add actual link if available
        shopNowButton.textContent = 'SHOP NOW';

        // Append all elements to product card
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPotency);
        productCard.appendChild(productFormat);
        productCard.appendChild(productPrice);
        productCard.appendChild(shopNowButton);

        // Append product card to container
        productContainer.appendChild(productCard);
    });
};

product();
