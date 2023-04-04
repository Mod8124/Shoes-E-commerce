import { PropType, defineComponent } from 'vue';

import Photo from '@/components/Photo/PhotoComponent.vue';
import fetchShoe from '@/fetch/FetchShoe';
import Detail from '@/components/Detail/DetailComponent.vue';
import InfoSkeleton from '@/components/Skeleton/details/info/InfoSkeleton.vue';

export default defineComponent({
  name: 'ProductView',
  components: {
    Photo,
    Detail,
    InfoSkeleton,
  },
  props: {
    id: {
      required: true,
      type: String as PropType<string>,
    },
  },
  setup(props) {
    const { shoe, load, isFetching } = fetchShoe();
    load(props.id);
    return {
      shoe,
      isFetching,
    };
  },
});
