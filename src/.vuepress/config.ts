import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "WR's Blog",
      description: "I will put some interesting or useful things here",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "WR的一格",
      description: "放点有意思的，或者是有用的东西在这里",
    },
  },

  theme,

  shouldPrefetch: false,
});
