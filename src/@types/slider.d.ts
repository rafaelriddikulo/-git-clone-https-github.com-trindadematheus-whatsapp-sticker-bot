// declaring module will allow typescript to import the module
declare module 'react-input-range' {
  // typing module default export as `any` will allow you to access its members without compiler warning
  const Slider: any;
  export default Slider;
}