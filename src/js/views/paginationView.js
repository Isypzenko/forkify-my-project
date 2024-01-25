import View from './View';

import icons from 'url:../../img/icons.svg';

class Pagination extends View {
  _parentElement = document.querySelector('.pagination');

  addHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateButtonsForMarkup(parametr, currentPage) {
    switch (parametr) {
      case 'prev':
        return `
      <button data-goto='${
        currentPage - 1
      }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
      `;
      case 'next':
        return `
      <button data-goto='${
        currentPage + 1
      }' class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
      case 'together':
        return `
      <button data-goto='${
        currentPage - 1
      }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button data-goto='${
            currentPage + 1
          }' class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    // Page 1 and there are other pages
    const numsPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (currentPage === 1 && numsPages > 1) {
      return this._generateButtonsForMarkup('next', currentPage);
    }
    //Last page
    if (currentPage === numsPages) {
      return this._generateButtonsForMarkup('prev', currentPage);
    }
    // other page
    if (currentPage < numsPages) {
      return this._generateButtonsForMarkup('together', currentPage);
    }
    //Page 1 and No other
    return '';
  }
}

export default new Pagination();
