import { defineComponent } from 'vue';

import Photo from '@/components/Photo/PhotoComponent.vue';
import fetchShoe from '@/fetch/FetchShoe';
import Detail from '@/components/Detail/DetailComponent.vue';

export default defineComponent({
  name: 'ProductView',
  components: {
    Photo,
    Detail,
  },
  props: ['id'],
  setup(props) {
    const { shoe, load } = fetchShoe(props.id);
    load();
    return {
      shoe,
    };
  },
});
