import { ref } from '@vue/reactivity';

const Imgs = () => {
  const originalImgs = ref( [ 'image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg' ] );
  const imgs = ref( [ 'image-product-1-thumbnail.jpg', 'image-product-2-thumbnail.jpg', 'image-product-3-thumbnail.jpg', 'image-product-4-thumbnail.jpg' ] );

  return {
    originalImgs,
    imgs
  };
};

export default Imgs;