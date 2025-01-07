import facepaint from 'facepaint';

export const breakpoints = {
    mobile: '@media(min-width: 320px)',
    tablet: '@media(min-width: 600px)',
    desktop: '@media(min-width: 1024px)'
};

export const mq: any = facepaint(Object.values(breakpoints));

export const scales = (() => {
    const lgScreen = 1920;
    const mdScreen = 768;
    const sdScreen = 375;
    const smScreen = 320;
    const pxToVw = (screen: number, px: number) => ((px / screen) * 100).toFixed(3) + 'vw';

    return {
        lg: (px: number) => pxToVw(lgScreen, px),
        sd: (px: number) => pxToVw(sdScreen, px),
        sm: (px: number) => pxToVw(smScreen, px),
        md: (px: number) => pxToVw(mdScreen, px)
    };
})();

export const colors = {
    black: {
        brightest: 'rgb(0 0 0)',
        medium: 'rgb(38, 38, 38)'
    },
    white: {
        brightest: 'rgb(255 255 255)',
        bright: 'rgba(208 208 208)',
        medium: 'rgba(208 208 208 / 0.8)',
        darkest: 'rgb(139, 139, 139)'
    },
    yellow: {
        brightest: 'rgb(255 203 5)',
        medium: 'rgb(235 187 4)',
        darkest: 'rgb(128 102 3)'
    },
    grey: {
        brightest: 'rgb(77, 77, 77)',
        medium: 'rgb(179, 179, 179)',
        enabled: 'rgba(242, 242, 242, 0.35)',
        hovered: 'rgba(242, 242, 242, 0.45)',
        dark: 'rgb(51, 51, 51)',
        darkest: 'rgb(31, 31, 31)',
        disabled: 'rgb(63, 63, 63)'
    },
    red: {
        brightest: 'rgb(229, 7, 58)',
        medium: `#e00000`,
    },
    border: {
        gray: 'rgb(31, 31, 31)'
    },
    overlay: 'rgba(0 0 0 / 0.3)'
};

