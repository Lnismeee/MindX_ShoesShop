import React from 'react'

export default function ScrollToTop({id}) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
  return null;
}
