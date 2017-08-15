// we need to parse it cause intl expects flat structure example details.toggle: 'Toggle' or detailsToggle: 'Toggle'
export default {
  'en-US': {
    detail: {
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeader: 'Reviews:',
      author: 'by {author}',
      // underneath is plusarisation example: count is a passed key value rest is intl specific api
      averageRating: 'Average Rating: {averageRating} ({count, plural, =0 {No reviews yet} one {# Review} other {# Reviews} } )',
      userRating: '{name} rated it: {rate} out of 5',
      window: '<small><em>All {numMerchants}</em></small> links open in a new window.',
      inputPlaceholder: 'Write down your thoughts',
    }
  },
  'pl-PL': {
    detail: {
      toggle: 'Więcej',
      purchase: 'Kup tą książkę od:',
      reviewsHeader: 'Recenzje',
      author: 'przez {author}',
      averageRating: 'średnia ocen: {averageRating} ({count, plural, =0 {Nie ma jeszcze recenzji!} one {# recenzja} other {# recenzji}})',
      userRating: '{name} ocenił na: {rate} na 5',
      window: '<small><em>Wszystkie {numMerchants}</em></small> linki otwieraja się w nowym oknie.',
      inputPlaceholder: 'Napisz co sądzisz',
    }
  }
}