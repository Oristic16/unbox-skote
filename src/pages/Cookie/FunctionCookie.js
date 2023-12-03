//set Cookie ของ UserData และ UserToken
export const SetCookieUser = ({ nameProfile,nameToken,payload,token,duration }) => {

  let expires
  if(duration) {
    var date = new Date()
    date.setTime(date.getTime() + (duration * 24 * 60 * 60 * 1000))
    expires = `expires=${date.toUTCString()}`;
  }

  const serializedObject = JSON.stringify(payload);

  document.cookie = nameProfile + "=" + encodeURIComponent(serializedObject) + ";" + expires + "; path=/"
  document.cookie = nameToken + "=" + token + ";" + expires + "; path=/"
}

//set Cookie อะไรก็ได้
export const SetCookieETC = ({ name,value,duration }) => {

  let expires
  if(duration) {
    var date = new Date()
    date.setTime(date.getTime() + (duration * 24 * 60 * 60 * 1000))
    expires = `expires=${date.toUTCString()}`;
  }

  document.cookie = name + "=" + value + ";" + expires + "; path=/"
}

const GetCookie = (nameToken) => {
  const name = nameToken + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
};

export const GetExpiresFromCookie = (nameToken) => {
  const cookieValue = GetCookie(nameToken);
  if (cookieValue) {
    const cookiePairs = cookieValue.split(';');
    for (let i = 0; i < cookiePairs.length; i++) {
      const pair = cookiePairs[i].trim().split('=');
      const key = pair[0];
      const value = pair[1];
      if (key.toLowerCase() === 'expires') {
        return value;
      }
    }
  }

  return null;
};