import {
  ADD_ITEM,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  MOVE_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_ITEM,
} from "./constants";
import img1 from "../img/product image 3.png";

// let initialState = [
//   {
//     id: 0,
//     name: "CK t-shirt",
//     img: img1,
//     price: 199,
//     actual_price: 299,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 0,
//     wishlisted: 0,
//   },
//   {
//     id: 1,
//     name: "white shirt",
//     img: "https://m.media-amazon.com/images/I/319Zx40AhUL.jpg",
//     price: 299,
//     actual_price: 499,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 0,
//     wishlisted: 0,
//   },
//   {
//     id: 2,
//     name: "t-shirt",
//     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422990/sub/goods_422990_sub13.jpg?width=1600&impolicy=quality_75",
//     price: 399,
//     actual_price: 699,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 5,
//     wishlisted: 0,
//   },
//   {
//     id: 3,
//     name: "black top",
//     img: "https://media.missguided.com/s/missguided/TJF22799_set/1/black-waffle-crew-neck-lettuce-hem-crop-top",
//     price: 499,
//     actual_price: 699,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 0,
//     wishlisted: 0,
//   },
//   {
//     id: 4,
//     name: "FOREVER 21",
//     img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14979324/2021/9/22/be6019b6-abfe-4bb1-8b03-d4d02b188c331632309346736-FOREVER-21-Women-Tops-281632309346092-1.jpg",
//     price: 799,
//     actual_price: 1490,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 0,
//     wishlisted: 0,
//   },
//   {
//     id: 5,
//     name: "jacket",
//     img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12946482/2021/7/14/6bcc0748-a9f0-4626-af1a-07f5f5b4664b1626265854711-Tommy-Hilfiger-Men-Jackets-6011626265853921-1.jpg",
//     price: 1499,
//     actual_price: 2999,
//     discription:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maxime porro soluta dolorum in sunt voluptate dolores eligendi laudantium unde nobis sed mollitia explicabo quis, neque sapiente iste, id quisquam!",
//     qty: 0,
//     wishlisted: 0,
//   },
// ];

let initialState = [
  {
    id: 0,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
  {
    id: 1,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
  {
    id: 2,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
  {
    id: 3,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
  {
    id: 4,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
  {
    id: 5,
    name: "SUPER JODI",
    img: "https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/i/f/iffco_super_jodi_2_1_.jpg",
    price: 489,
    actual_price: 500,
    discount :"2%",
    discription:
      " Nano Urea (Liquid) is a unique source of Nitrogen, that effectively fulfills crop Nitrogen requirements.",
    qty: 0,
    wishlisted: 0,
  },
];

let userState = [{
  
}]

let reducer = (state = initialState, action) => {
  let cp = [];
  let id = -1;
  switch (action.type) {
    case ADD_TO_CART:
      cp = state.map((el) => el);
      id = action.payload;
      cp[id].qty = cp[id].qty + 1;
      return cp;

    case REMOVE_FROM_CART:
      cp = state.map((el) => el);
      id = action.payload;
      if (cp[id].qty > 0) cp[id].qty = 0;
      return cp;

    case MOVE_TO_CART:
      cp = state.map((el) => el);
      id = action.payload;
      cp[id].wishlisted = 0;
      cp[id].qty = cp[id].qty + 1;
      return cp;

    case ADD_TO_WISHLIST:
      cp = state.map((el) => el);
      id = action.payload;
      cp[id].wishlisted = 1;
      return cp;

    case ADD_ITEM:
      cp = state.map((el) => el);
      id = action.payload;
      cp[id].qty = cp[id].qty + 1;
      return cp;

    case SUBTRACT_ITEM:
      cp = state.map((el) => el);
      id = action.payload;
      if (cp[id].qty > 0) cp[id].qty = cp[id].qty - 1;
      return cp;

    default:
      return state;
  }
};

export default reducer;
