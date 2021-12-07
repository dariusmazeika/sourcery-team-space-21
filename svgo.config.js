module.exports = {
  plugins: [
    {
      name: "cleanupAttrs",
      active: true,
    },
    {
      name: "cleanupEnableBackground",
      active: true,
    },
    {
      name: "cleanupIDs",
      active: true,
    },
    {
      name: "cleanupNumericValues",
      active: true,
    },
    {
      name: "collapseGroups",
      active: true,
    },
    {
      name: "convertColors",
      active: true,
    },
    {
      name: "convertPathData",
      active: true,
      params: {
        noSpaceAfterFlags: false,
      },
    },
    {
      name: "convertShapeToPath",
      active: true,
    },
    {
      name: "convertStyleToAttrs",
      active: false,
    },
    {
      name: "convertTransform",
      active: true,
    },
    {
      name: "inlineStyles",
      active: false,
    },
    {
      name: "mergePaths",
      active: true,
      params: {
        noSpaceAfterFlags: false,
      },
    },
    {
      name: "minifyStyles",
      active: true,
    },
    {
      name: "moveElemsAttrsToGroup",
      active: true,
    },
    {
      name: "moveGroupAttrsToElems",
      active: true,
    },
    {
      name: "removeAttrs",
      active: true,
      params: {
        attrs: "(fill|stroke)",
      },
    },
    {
      name: "removeComments",
      active: true,
    },
    {
      name: "removeDesc",
      active: true,
    },
    {
      name: "removeDimensions",
      active: true,
    },
    {
      name: "removeDoctype",
      active: false,
    },
    {
      name: "removeEditorsNSData",
      active: true,
    },
    {
      name: "removeEmptyAttrs",
      active: true,
    },
    {
      name: "removeEmptyContainers",
      active: true,
    },
    {
      name: "removeEmptyText",
      active: true,
    },
    {
      name: "removeHiddenElems",
      active: true,
    },
    {
      name: "removeMetadata",
      active: false,
    },
    {
      name: "removeNonInheritableGroupAttrs",
      active: true,
    },
    {
      name: "removeTitle",
      active: true,
    },
    {
      name: "removeUnknownsAndDefaults",
      active: true,
      params: {
        keepRoleAttr: true,
      },
    },
    {
      name: "removeUnusedNS",
      active: true,
    },
    {
      name: "removeUselessDefs",
      active: true,
    },
    {
      name: "removeUselessStrokeAndFill",
      active: false,
    },
    {
      name: "removeViewBox",
      active: true,
    },
    {
      name: "removeXMLNS",
      active: false,
    },
    {
      name: "removeXMLProcInst",
      active: false,
    },
    {
      name: "sortAttrs",
      active: true,
    },
  ],
};
