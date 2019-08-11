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
        title: "Analytics and Testing",
        links: [
          {
            name: "web.dev Website Best-Practices Tester",
            URI: "https://web.dev/"
          },
          {
            name: "Google Analytics",
            URI: "https://marketingplatform.google.com/about/analytics/"
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
            name: "Mixkit Art",
            URI: "https://mixkit.co/art/"
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
            name: "cssgradient.io Gradient Background Generator",
            URI: "https://cssgradient.io/"
          },
          {
            name: "coolors.co Palette Generator",
            URI: "https://coolors.co/"
          },
          {
            name: "culrs.com Pre-generated Palettes",
            URI: "https://culrs.com/"
          },
          {
            name: "sessions.edu Color Wheel",
            URI: "https://www.sessions.edu/color-calculator/"
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
          { name: "Mixkit Videos", URI: "https://mixkit.co/category/" },
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
          },
          {
            name: "Typewolf – What's Trending in Type",
            URI: "https://www.typewolf.com"
          }
        ],
        showChildren: false
      }
    ]
  },
  mounted() {
    //   if (localStorage.categories) {
    //     try {
    //       var categories = JSON.parse(localStorage.getItem("categories"));
    //       console.log(categories.length);
    //       console.log(this.categories.length);
    //       if (categories.length == this.categories.length) {
    //         this.categories = categories;
    //       } else {
    //         localStorage.removeItem("categories");
    //       }
    //     } catch (error) {
    //       localStorage.removeItem("categories");
    //     }
    //   }
  },
  methods: {
    toggleChildren(category, event) {
      event.currentTarget.setAttribute(
        "aria-expanded",
        (!category.showChildren).toString()
      );
      category.showChildren = !category.showChildren;
      localStorage.categories = JSON.stringify(this.categories);
    }
  }
});
