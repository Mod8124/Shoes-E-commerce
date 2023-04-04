import { ref } from 'vue';
import { IShoe } from '@/interface/interface';

const get = () => {
  const shoe = ref<IShoe[]>([]);
  const recommendations = ref<IShoe[]>([]);
  const isFetching = ref<boolean>(false);

  const load = async (id: string) => {
    try {
      isFetching.value = true;
      const response = await fetch('http://localhost:3000/api/v1/shoes/' + id + '?recommendation=true');
      const data = await response.json();
      if (data) {
        shoe.value = data.data;
        recommendations.value = data.recommendations;
        isFetching.value = false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    shoe,
    load,
    recommendations,
    isFetching,
  };
};

export default get;
