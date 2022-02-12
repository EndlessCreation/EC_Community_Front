export const checkIsInViewport = (elem: HTMLElement) => {
  if (!elem || !window) {
    return false;
  }

  const { top: elementTop, bottom: elementBottom } = elem.getBoundingClientRect();

  return elementBottom > 0 && elementTop <= window.innerHeight;
};
