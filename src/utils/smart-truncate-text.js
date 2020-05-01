export default (text, count = 200) => {
  const regexp = new RegExp(`^(.{0,${count}})[\\s]`);
  const match = text.match(regexp);

  if (match) {
    console.log(match);
    return match[1];
  }

  return text;
}
