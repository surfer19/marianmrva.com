function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    // screens: {
    //   sm: "640px",
    // },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      // padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '560px',
        md: '680px',
        lg: '940px',
        xl: '1100px',
        '2xl': '1456',
      },
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    extend: {
      textColor: {
        joy: {
          'blue-highlight': '#36A3FF',
          'gray-text': '#A9ADC1'
        },
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        joy: {
          'blue-highlight': '#36A3FF',
        },
        skin: {
          fill: withOpacity("--color-fill"),

          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        // mono: ["IBM Plex Mono", "monospace"],
        poppins: ["Poppins", "Open Sans", "Arial"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
