import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { IFavorites, TFavoritesModel } from '@/interface/interface';

export default defineComponent({
  name: 'AccountAuth',
  setup() {
    const store = useStore();
    const view = ref<string>('');
    const favorites = computed<IFavorites>(() => store.state.userModule.favorites);
    const isFetching = computed<boolean>(() => store.state.userModule.isFetching);

    const changeView = (value: string) => {
      view.value = value;

      if (view.value === 'favorites' && favorites.value.favorites.length === 0) {
        store.dispatch('userModule/getFavorites');
      }
    };

    const handleDelete = (favorite: TFavoritesModel) => {
      if (favorite) store.dispatch('userModule/deleteFavorites', favorite?._id);
    };

    const logout = () => {
      store.dispatch('userModule/logout');
      store.dispatch('set_ModalAuth');
    };

    return {
      logout,
      view,
      changeView,
      favorites,
      isFetching,
      handleDelete,
    };
  },
});
