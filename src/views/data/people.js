const allPeople = [
  ["eli_fatsi",      "http://localhost:3000/images/eli_fatsi.jpg"],
  ["blair_culbreth", "http://localhost:3000/images/blair_culbreth.jpg"],
  ["patrick_reagan", "http://localhost:3000/images/patrick_reagan.jpg"]
]

export default allPeople.map(function(pair) {
  return {
    slug: pair[0], url: pair[1]
  }
})
