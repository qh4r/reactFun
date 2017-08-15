import React from 'react';
import { meanBy, round, sortBy } from 'lodash';

// for testing it's best to use react-intl
// https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl
// Enzyme -> helper function for mount and shallow with intl

import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  injectIntl
} from 'react-intl';

import books from '../books.json';

let locale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.language // IE
  || 'en-US';


const BookDetail = ({ match, intl }) => {
  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  const  averageRating = book.reviews.length ?  round(meanBy(book.reviews, (r) => r.rating), 2) : 0;
  return (
    <div className="BookDetail">
      <div className="BookDetail-meta">
        <img src={book.image} width="200" height="275" alt={book.title} />
        <div className="BookDetail-metaBody">
          <h1>{book.title}</h1>
          <h3>
            <FormattedMessage id="detail.author" values={{ author: book.author }} />
          </h3>
          <div>
            <input type="checkbox" id="toggle" hidden />
            <p>{book.description}</p>
            <label className="BookDetail-descriptionToggle" htmlFor="toggle">
              <FormattedMessage id="detail.toggle" />
            </label>
          </div>
        </div>
      </div>

      <h3 className="BookDetail-merchantHeading">
        <FormattedMessage id="detail.purchase" />
      </h3>
      <div className="BookDetail-merchants">
        {book.merchants.map((merchant) => (
          <a href={merchant.link} className="Merchant" key={merchant.name} target="_blank">
            <img src={merchant.icon} width="32" height="32" alt={merchant.name} />
            <strong>{merchant.name}</strong>
            <p>
              <FormattedNumber
                value={merchant.price[locale]}
                style="currency"
                currencyDisplay="symbol"
                currency={locale === "en-US" ? "USD" : "PLN"}
              />
            </p>
          </a>
        ))}
      </div>

      <FormattedHTMLMessage id="detail.window" values={{numMerchants: book.merchants.length}}></FormattedHTMLMessage>

      <h2>
        <FormattedMessage id="detail.reviewsHeader" />
      </h2>
      <h3>
        <FormattedMessage id="detail.averageRating" values={{averageRating, count: book.reviews.length}}/> </h3>
      <div className="BookDetail-reviews">
        {sortedReviews.map((review) => (
          <div className="Review" key={review.date}>
            <div className="Review-meta">
              <img src={review.avatar} alt="Avatar" />
              <p>
                {/*Can pass jsx as values*/}
                <FormattedMessage id="detail.userRating" values={{name: <strong>{review.name}</strong>, rate: review.rating}}/>
                <br />
                {/* jest wiele sposobow formatowan, wszysktie uwzgledniaja locale*/}
                <FormattedDate value={new Date(review.date)} year="2-digit" month="long" day="numeric"/>
                &nbsp;

                {/* FormattedTime be dodatkowych parametrow wyswietla sam czas*/}
                <FormattedTime value={new Date(review.date)} />
                <br />

                {/* ale mozne wyswietlac tez date (dodatkowo przecinek*/}
                <FormattedTime value={new Date(review.date)} year="2-digit" month="2-digit" day="2-digit"/>
                <br />

                {/* okresla wzglednie aktualnej daty - i wypisuje w popranym jezyku*/}
                <FormattedRelative
                  value={new Date(review.date)}
                />

              </p>
            </div>
            <p>{review.body}</p>
          </div>
        ))}
      </div>

      {/* EXAMPLE OF PLAIN INTL TEXT INJECTION*/}
      <textarea placeholder={intl.formatMessage({id: 'detail.inputPlaceholder'})}>

      </textarea>

    </div>
  )
}

// need injectIntl wrapper to pass intl as props USED FOR PLAIN TEXT INJECTION TO TEXTAREA PLACEHOLDER
export default injectIntl(BookDetail);