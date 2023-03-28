import { ref } from 'vue';
import { IShoe } from '@/interface/interface';

const get = () => {
  const shoes = ref<IShoe[]>([]);
  const isFetching = ref<boolean>(false);

  const load = async () => {
    try {
      isFetching.value = true;
      const response = await fetch('http://localhost:3000/api/v1/shoes');
      const data = await response.json();
      if (data) {
        shoes.value = data.data;
      }
      isFetching.value = false;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    shoes,
    load,
    isFetching,
  };
};

export default get;
