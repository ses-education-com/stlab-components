export const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());

//this function get image url check if its start with the REACT_APP_MEDIA_FIX
//env variabale and if yes remove that part from the url
export function fixUrl(img_url) {
  const { REACT_APP_MEDIA_FIX } = process.env;
  if (
    img_url.substring(0, REACT_APP_MEDIA_FIX.length) === REACT_APP_MEDIA_FIX
  ) {
    console.log(
      "fixUrl",
      img_url,
      "\n",
      img_url.substring(REACT_APP_MEDIA_FIX.length)
    );
    return img_url.substring(REACT_APP_MEDIA_FIX.length);
  }
  return img_url;
}
