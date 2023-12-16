module.exports = function getDate(
  locale = "en-US",
  options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
) {
    console.log("something")
  return new Date().toLocaleDateString(locale, options);
};
