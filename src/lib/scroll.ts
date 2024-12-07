export function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }