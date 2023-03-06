import { galleryItems } from "./gallery-items.js";

const divRef = document.querySelector(".gallery");

const imagesMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = imagesMarkup;

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    )
    .join("");
}

divRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  divRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
