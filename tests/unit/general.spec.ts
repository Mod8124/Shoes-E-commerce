import { mount } from '@vue/test-utils';
import FooterComponent from '../../src/components/Footer/FooterComponent.vue';
import CardComponent from '@/components/Card/CardComponent.vue';

describe('test footer', () => {
  it('should renders correctly', () => {
    const wrapper = mount(FooterComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('should footer renders more element', () => {
    const wrapper = mount(FooterComponent);
    expect(wrapper.find('.footerComponent').exists()).toBe(true);
    expect(wrapper.find('.footer__title').exists()).toBe(true);
    expect(wrapper.find('.footer__link').exists()).toBe(true);
    expect(wrapper.find('.social').exists()).toBe(true);
    expect(wrapper.find('.footer__gps').exists()).toBe(true);
    expect(wrapper.find('.footer__privacy').exists()).toBe(true);
  });
});

describe('CardComponent', () => {
  it('renders an image and a Price component', () => {
    const shoe = {
      name: 'Air Max',
      price: '150',
      image: 'airmax.jpg',
    };
    const wrapper = mount(CardComponent, {
      props: {
        shoe,
      },
    });
    const img = wrapper.find('.card__image');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(shoe.image);
    expect(img.attributes('alt')).toBe(shoe.name + 'image');

    const price = wrapper.findComponent({ name: 'Price' });
    expect(price.exists()).toBe(true);
    expect(price.props('shoe')).toBe(shoe);
  });
});
