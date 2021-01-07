// eslint-disable-next-line import/no-unresolved
import * as CSS from 'csstype';

import Bold from './EBGaramond-Bold.ttf';
import BoldItalic from './EBGaramond-BoldItalic.ttf';
import ExtraBold from './EBGaramond-ExtraBold.ttf';
import ExtraBoldItalic from './EBGaramond-ExtraBoldItalic.ttf';
import Italic from './EBGaramond-Italic.ttf';
import Medium from './EBGaramond-Medium.ttf';
import MediumItalic from './EBGaramond-MediumItalic.ttf';
import Regular from './EBGaramond-Regular.ttf';
import SemiBold from './EBGaramond-SemiBold.ttf';
import SemiBoldItalic from './EBGaramond-SemiBoldItalic.ttf';
import { makeSrc } from './utils';


const src = makeSrc('EBGaramond');
export const garamondFonts: CSS.FontFace[] = [
    {
        fontFamily: 'EBGaramond ExtraBold',
        src: src('ExtraBold', ExtraBold),
        fontWeight: 800,
        fontStyle: 'normal',
    }, {
        fontFamily: 'EBGaramond ExtraBold',
        src: src('ExtraBold Italic', ExtraBoldItalic),
        fontWeight: 800,
        fontStyle: 'italic',
    }, {
        fontFamily: 'EBGaramond Bold',
        src: src('Bold', Bold),
        fontWeight: 'bold',
        fontStyle: 'normal',
    }, {
        fontFamily: 'EBGaramond Bold',
        src: src('Bold Italic', BoldItalic),
        fontWeight: 'bold',
        fontStyle: 'italic',
    }, {
        fontFamily: 'EBGaramond SemiBold',
        src: src('SemiBold', SemiBold),
        fontWeight: 600,
        fontStyle: 'normal',
    }, {
        fontFamily: 'EBGaramond SemiBold',
        src: src('SemiBold Italic', SemiBoldItalic),
        fontWeight: 600,
        fontStyle: 'italic',
    }, {
        fontFamily: 'EBGaramond Medium',
        src: src('Medium', Medium),
        fontWeight: 500,
        fontStyle: 'normal',
    }, {
        fontFamily: 'EBGaramond Medium',
        src: src('Medium Italic', MediumItalic),
        fontWeight: 500,
        fontStyle: 'italic',
    }, {
        fontFamily: 'EBGaramond Regular',
        src: src('Regular', Regular),
        fontWeight: 400,
        fontStyle: 'regular',
    }, {
        fontFamily: 'EBGaramond Regular',
        src: src('Regular Italic', Italic),
        fontWeight: 400,
        fontStyle: 'italic',
    },
];

