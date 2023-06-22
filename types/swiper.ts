export type SwiperProps = {
  dataSwipes?: DataSwipe[];
  config?: any;
};

type DataSwipe = {
  image: string,
  description: string
}