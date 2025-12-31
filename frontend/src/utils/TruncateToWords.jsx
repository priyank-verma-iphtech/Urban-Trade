
const TruncateToWords = (p, wordLimit = 3) => {
    const words = p.split(" ");
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(" ") + "..."
      : words;
  };

export default TruncateToWords;