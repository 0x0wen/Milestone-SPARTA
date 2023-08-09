import { useEffect } from 'react';

export default function Scroll(props) {
  useEffect(() => {
    function changeNavbar() {
      if (window.scrollY >= 80) {
        props.colored();
      } else {
        props.transparent();
      }
    }

    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [props.colored, props.transparent]);

  return null;
}
