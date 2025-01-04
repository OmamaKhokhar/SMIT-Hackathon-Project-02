import { db, getDocs, collection ,addDoc } from "./firebaseConfig.js";
const cloudName = 'dx2vrqvc5'

const getDataCreateCards = async () => {
    const querySnapshot = await getDocs(collection(db, "Product Detail"));
   
    let index = 0
    let productCardList = document.getElementsByClassName('product-card');
  
    
    querySnapshot.forEach((doc) => {
        // Get the product data from Firestore
        const productData = doc.data();
        let productCard = productCardList[index];
        index++

        // Set the HTML structure for the card
        productCard.innerHTML = `
            <img src="https://res.cloudinary.com/${cloudName}/image/upload/${productData.image}" alt="${productData.name}" class="product-image">
            <h3 class="product-title">
                ${productData.name}<br>
                <span class="dark-pink">${productData.price}</span>
            </h3>
            <p class="product-description">${productData.description}</p>
            <p class="product-potency">${productData.potency}</p>
            <p class="product-format">${productData.quantity}</p>
            
        `;
    });
};


// // Reference to Firestore collection
// const messagesCollection = collection(db, "Contact Messages");

// // Get references to form elements
// const form = document.querySelector("form");
// const contactTypeInputs = document.getElementsByName("contactType");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const privacyConsentInput = document.getElementById("privacyConsent");

// // Listen for form submission
// form.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get selected contact type
//     let contactType = "";
//     for (const input of contactTypeInputs) {
//         if (input.checked) {
//             contactType = input.id; // Either "sayHi" or "getQuote"
//             break;
//         }
//     }

//     // Validate required fields
//     if (!emailInput.value || !messageInput.value || !privacyConsentInput.checked) {
//         alert("Please fill in all required fields and accept the privacy policy.");
//         return;
//     }

//     // Prepare data object
//     const formData = {
//         contactType: contactType,
//         name: nameInput.value.trim(),
//         email: emailInput.value.trim(),
//         message: messageInput.value.trim(),
//         timestamp: new Date(), // Add a timestamp
//     };

//     try {
//         // Save data to Firestore
//         await addDoc(messagesCollection, formData);
//         alert("Message sent successfully!");
        
//         // Clear the form
//         form.reset();
//     } catch (error) {
//         console.error("Error saving message to Firestore:", error);
//         alert("There was an error sending your message. Please try again later.");
//     }
// });

getDataCreateCards();