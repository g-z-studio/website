const path = require("path");
module.exports = [
  {
    path: "/services/image",
    component: path.resolve(`src/pages/services/image.jsx`),
  },
  {
    path: "/services/usage",
    component: path.resolve(`src/pages/services/usage.jsx`),
  },
  {
    path: "/services/espace",
    component: path.resolve(`src/pages/services/espace.jsx`),
  },
];
