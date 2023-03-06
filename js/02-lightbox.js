import { galleryItems } from "./gallery-items.js";

const divRef = document.querySelector(".gallery");

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview} " alt="${description}" title="${description}"/>
</a>
 `;
    })
    .join(" ");
}

const imagesMarkup = createImageCardMarkup(galleryItems);
divRef.innerHTML = imagesMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
