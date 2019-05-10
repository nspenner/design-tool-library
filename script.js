var navigation = new Vue({
  el: "#navigation",
  data: {
    categories: [
      {
        title: "Accessibility",
        links: [
          {
            name: "color.review Contrast Checker",
            URI: "https://color.review/"
          },
          {
            name: "MDN Accessibility Overview",
            URI: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"
          },
          {
            name: "Web AIM Color Contrast Checker",
            URI: "https://webaim.org/resources/contrastchecker/"
          },
          {
            name: "Web AIM Link Contrast Checker",
            URI: "https://webaim.org/resources/linkcontrastchecker/"
          }
        ],
        showChildren: false
      },
      {
        title: "Art and Illustration",
        links: [
          {
            name: "Lukasz Adam Illustrations",
            URI: "https://lukaszadam.com/illustrations"
          },
          {
            name: "Undraw Illustrations",
            URI: "https://undraw.co/illustrations"
          }
        ],
        showChildren: false
      },
      {
        title: "Color",
        links: [
          {
            name: "coolors.co Palette Generator",
            URI: "https://coolors.co/"
          },
          {
            name: "culrs.com Pre-generated Palettes",
            URI: "https://culrs.com/"
          }
        ],
        showChildren: false
      },
      {
        title: "CSS Frameworks and Stylesheets",
        links: [
          {
            name: "Water.css Minimal Stylesheet",
            URI: "https://kognise.github.io/water.css/"
          }
        ],
        showChildren: false
      },
      {
        title: "Icons",
        links: [
          {
            name: "Fontawesome",
            URI: "https://fontawesome.com/"
          },
          {
            name: "Ionicons",
            URI: "https://ionicons.com/"
          }
        ],
        showChildren: false
      },
      {
        title: "Shadow",
        links: [
          {
            name: "cssmatic Box Shadow Generator",
            URI: "https://www.cssmatic.com/box-shadow"
          }
        ],
        showChildren: false
      },
      {
        title: "Stock Photos and Images",
        links: [
          {
            name: "Unsplash Free Photos",
            URI: "https://unsplash.com/"
          }
        ],
        showChildren: false
      },
      {
        title: "Fonts and Typography",
        links: [
          {
            name: "Font Pair – For Pairing Google Fonts",
            URI: "https://fontpair.co/"
          },
          {
            name: "Google Fonts",
            URI: "https://fonts.google.com/"
          }
        ],
        showChildren: false
      }
    ]
  },
  methods: {
    toggleChildren(category, event) {
      event.currentTarget.setAttribute(
        "aria-expanded",
        (!category.showChildren).toString()
      );
      category.showChildren = !category.showChildren;
    }
  }
});
