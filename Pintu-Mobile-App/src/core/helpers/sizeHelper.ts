import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 100;
const guidelineBaseHeight = 100;
const vw = (size: number) => (width / guidelineBaseWidth) * size; // Width
const vh = (size: number) => (height / guidelineBaseHeight) * size; // Height
const sp = (size: number, factor = 0.5) => size + (vw(size) - size) * factor; // For Font Size
export {vw, vh, sp};
