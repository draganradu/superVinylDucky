import { ref } from 'vue';

// data ---------------------------------------
// const form = ref({
//   title: props.product.title,
//   en,
//   nl,
//   buyLink: props.product.buyLink,
//   // to add description
//   category: (props.product.category || ["sticker"]).join(", "),
//   colors: (props.product.colors || ["black"]).join(", "),
//   img: (props.product.img || []).join(", "),
//   material: props.product.material || "Oracal 651",
//   price: props.product.price || 0,
//   sizeL: size[0],
//   sizeH: size[1],
// })
export const form = ref({ ...editItem });
