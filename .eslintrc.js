module.exports = {
  root: true,
  extends: ["next", "prettier", "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
