import { ref } from 'vue';
import { IShoe } from '@/interface/interface';

const get = (id: string) => {
  const shoe = ref<IShoe[]>([]);

  const load = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/shoes/' + id);
      const data = await response.json();
      if (data) {
        shoe.value = data.data;
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    shoe,
    load,
  };
};

export default get;
