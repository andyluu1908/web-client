export const mobileBreakPoint = 769

export const mobileBPCSS = `${mobileBreakPoint}px`

export const isMobile = () => {
  return window.innerWidth < mobileBreakPoint
}
