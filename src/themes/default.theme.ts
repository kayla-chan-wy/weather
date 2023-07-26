import { createMultiStyleConfigHelpers, extendBaseTheme } from "@chakra-ui/react";
import { selectAnatomy } from '@chakra-ui/anatomy'

const palette = {
    font: {
        primary: "#2a3547",
        label: "#b2b5c0",
    },
};

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
    field: {
        width: '100%',
        fontSize: '20px',
        color: palette.font.primary,
    },
    icon: {
        color: palette.font.primary,
    },
})

export const selectTheme = defineMultiStyleConfig({ baseStyle })

export const theme = extendBaseTheme({
    textStyles: {
        temperature: {
            fontSize: '70px',
            lineHeight: '70px',
            fontWeight: '500',
            color: palette.font.primary,
        },
        condition: {
            fontSize: '18px',
            color: palette.font.primary,
        },
        label: {
            fontSize: '13px',
            fontWeight: '400',
            color: palette.font.label,
        },
        data: {
            fontSize: '20px',
            fontWeight: '500',
            color: '#5a6a85',
        },
    },
    layerStyles: {
        cardBase: {
            bg: '#f5f7f9',
            minHeight: '40rem',
        },
        card: {
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(46,71,101,.1)',
        },
        cardLeft: {
            backgroundSize: 'cover',
            borderRadius: '15px 0 0 15px',
            height: '30rem',
            width: '40rem',
        },
        cardRight: {
            borderRadius: '0 15px 15px 0',
            bg: '#FFFFFF',
            height: '30rem',
            width: '28rem',
            padding: '50px',
        },
    },
    components: {
        Select: selectTheme
    },
    fonts: {
        heading: `'Plus Jakarta Sans', sans-serif`,
        body: `'Plus Jakarta Sans', sans-serif`,
    },
});
