import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText,ScrollToPlugin);

export default gsap;
export { SplitText, ScrollTrigger };
