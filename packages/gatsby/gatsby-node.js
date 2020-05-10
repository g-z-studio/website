const path = require("path");

exports.createPages = async ({ actions: { createPage } }) => {
  const projectTemplate = await path.resolve(
    `src/templates/ProjectTemplate.jsx`
  );
  const fakeData = require("./src/scenes/homepage/Portfolio/fakeData.node");

  const pages = fakeData.fakeData;
  console.log(typeof pages);
  console.log(pages);

  pages.forEach(page => {
    createPage({
      path: `/projects/${page.slug}`,
      component: projectTemplate,
      context: { page }, // This is to pass data as props to your component.
    });
  });
};
