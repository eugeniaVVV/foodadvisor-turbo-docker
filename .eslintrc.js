module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    "react/jsx-no-duplicate-props": [1, { "ignoreCase": false }],
    "react/jsx-no-undef": [1, { "allowGlobals": true }],
    "react/prop-types": 0,
    "react/no-children-prop": [1, { "allowChildrenOf": ["React.Fragment"] }]
  }
};
