const checkVisibility = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * 0.75;
};

const handleScroll = (): void => {
  const elements = document.querySelectorAll<HTMLElement>('.hidden');
  
  elements.forEach((element) => {
    if (checkVisibility(element)) {
      element.classList.add('show');
    }
  });
};

const setupScrollAnimations = (): void => {
  handleScroll();

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', handleScroll, { passive: true });
};

export default setupScrollAnimations;

export { setupScrollAnimations, checkVisibility, handleScroll }; 