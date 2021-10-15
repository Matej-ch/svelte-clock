const production = !process.env.ROLLUP_WATCH;

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,svelte}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    variants: {
        extend: {},
    },
    enabled: production,
    plugins: []
}