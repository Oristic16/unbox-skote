export const GetCookieData = (cookieName) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return JSON.parse(decodeURIComponent(value));
      }
    }
    return '';
}

export const GetCookieToken = (cookieName) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return '';
}

export const GetCookieValueAndExpires = (cookieName) => {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookies.split(';');

  for (const cookie of cookiesArray) {
      const [name, value] = cookie.trim().split('=');

      if (name === cookieName) {
          const expiresIndex = cookie.indexOf('expires=');

          console.log("expiresIndex: ",expiresIndex);

          if (expiresIndex !== -1) {
              const expiresString = cookie.substring(expiresIndex + 8).split(';')[0];
              // const expiresDate = expiresString;
              const expiresDate = new Date(expiresString);
              return { value: decodeURIComponent(value), expires: expiresDate };
          } else {
              return { value: decodeURIComponent(value), expires: null };
          }
      }
  }

  return { value: '', expires: null };
};