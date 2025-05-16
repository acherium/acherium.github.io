import { $ } from "../monat/module.js";

export default (master) => {
  const info = {
    year: new Date().getFullYear(),
    author: "Acherium"
  };

  master.dictman.set(info).apply();
};