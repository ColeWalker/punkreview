import Typography from 'typography'
const typography = new Typography({
baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  overrideStyles: ({adjustFontSizeTo, rythm}, options, styles) => ({
      body: {
          color: 'white',
      },
      a:{
          color :'white'
      }
  })
});

export default typography;