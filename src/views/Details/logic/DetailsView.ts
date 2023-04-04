import { defineComponent, watch, toRefs, PropType } from 'vue';
import CardComponent from '@/components/Card/CardComponent.vue';
import Photo from '@/components/Photo/PhotoComponent.vue';
import fetchShoe from '@/fetch/FetchShoe';
import Detail from '@/components/Detail/DetailComponent.vue';
import CardSkeleton from '@/components/Skeleton/Card/CardSkeleton.vue';
import DetailsSkeleton from '@/components/Skeleton/details/DetailsSkeleton.vue';

export default defineComponent({
  name: 'DetailsView',
  props: {
    id: {
      type: String as PropType<string>,
      required: true,
    },
  },
  components: {
    Photo,
    Detail,
    CardComponent,
    CardSkeleton,
    DetailsSkeleton,
  },
  setup(props) {
    const { shoe, load, recommendations, isFetching } = fetchShoe();
    const { id } = toRefs(props);

    watch(id, (newValue) => {
      load(newValue);
    });

    load(props.id);
    return {
      shoe,
      recommendations,
      isFetching,
    };
  },
});
