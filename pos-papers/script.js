window.onscroll = () => {
    const nav = document.querySelector('#fixed');
    if (this.scrollY <= 100) {
      nav.className = '';
    } else {
      nav.className = 'scroll';
    }
  };