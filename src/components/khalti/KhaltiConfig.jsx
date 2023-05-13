import mykey from "./KhaltiKey";
import axios from 'axios'
let config = {
    // replace this key with yours
    "publicKey": mykey.publicKey,
    "productIdentity": "1234",
    "productName": "EShop",
    "productUrl": "http://localhost:5173/",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
            alert("Thank You For Shopping");
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config