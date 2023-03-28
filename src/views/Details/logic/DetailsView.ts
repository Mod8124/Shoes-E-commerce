import { defineComponent } from 'vue';
import Photo from '@/components/Photo/PhotoComponent.vue';
import fetchShoe from '@/fetch/FetchShoe';
import Detail from '@/components/Detail/DetailComponent.vue';

export default defineComponent({
  name: 'DetailsView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Photo,
    Detail,
  },
  setup(props) {
    const { shoe, load } = fetchShoe(props.id);
    console.log(shoe);
    load();
    return {
      shoe,
    };
  },
});
