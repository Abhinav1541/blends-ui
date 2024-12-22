export const scrollWithOffset = (el, offset) =>
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset + offset,
    behavior: "smooth",
  });
