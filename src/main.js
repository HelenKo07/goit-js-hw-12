import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

const formSearchCard = document.querySelector('.form-search');
const listGalleryCard = document.querySelector('.gallery');
const loaderStyle = document.querySelector('.loader');

loaderStyle.style.display = 'none';

const lightboxModalWindow = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});

formSearchCard.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();

  let query = event.target.query.value.trim();

  listGalleryCard.innerHTML = '';

  if (!query) {
    iziToast.show({
      backgroundColor: '#ef4040',
      message: `Please fill in the field to search for data!`,
      borderBottom: '2px solid #ffbebe',
      borderRadius: '4px',
      padding: '20px',
      width: '432px',
      height: '88px',
      color: '#fafafb',
      position: 'topRight',
    });
    return;
  }

  loaderStyle.style.display = 'inline-block';

  console.log(fetchPhotosByQuery(query));
    // .then(data => {
    //   console.log(data);
    //   console.log(data.hits.length);
    //   console.log(data.hits);

    //   if (data.hits.length === 0) {
    //     iziToast.show({
    //       title: '',
    //       backgroundColor: '#ef4040',
    //       borderBottom: '2px solid #ffbebe',
    //       borderRadius: '4px',
    //       padding: '20px',
    //       width: '432px',
    //       height: '88px',
    //       color: '#fafafb',
    //       message: `Sorry, there are no images matching your search query. Please try again!`,
    //       position: 'topRight',
    //     });
    //   }
    //   listGalleryCard.insertAdjacentHTML(
    //     'beforeend',
    //     createGalleryCardTemplate(data.hits)
    //   );
    //   lightboxModalWindow.refresh();
    // })
    // .catch(error => {
    //   console.log(error.message);
    // })
    // .finally(() => {
    //   loaderStyle.style.display = 'none'
    // });
    // event.target.reset();
}
