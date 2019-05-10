var navigation = new Vue({
  el: "#navigation",
  data: {
    categories: [
      {
        title: "Accessibility",
        links: [
          {
            name: "Web AIM Color Contrast Checker",
            URI: "https://webaim.org/resources/contrastchecker/"
          },
          {
            name: "Web AIM Link Contrast Checker",
            URI: "https://webaim.org/resources/linkcontrastchecker/"
          },
          {
            name: "MDN Accessibility",
            URI: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"
          }
        ],
        showChildren: false
      },
      {
        title: "Color",
        links: ["qwerty"],
        showChildren: false
      },
      {
        title: "Shadow",
        showChildren: false
      }
    ]
  },
  methods: {
    toggleChildren(category) {
      category.showChildren = !category.showChildren;
    }
  }
});
