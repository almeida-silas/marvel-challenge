export const extractIDfromURI = (text: string) => {
  const uri = text.substring(29);
  if (uri) {
    return parseInt(uri.match(/\d/g).join(''), 10);
  }
  return false;
};
