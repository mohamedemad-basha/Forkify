import view from './view.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(btn);
      handler(goToPage);
    });
  }
  _generateMarkupBtn(page, type) {
    return `
         <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
         ${
           type === 'prev'
             ? `
         <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${page}</span>
           `
             : `
           <span>${page}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
            `
         }
            </button>
            `;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );
    const curPage = this._data.page;

    // first page and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtn(curPage + 1, 'next');
    }

    //last
    if (curPage === numPages && numPages > 1)
      return this._generateMarkupBtn(curPage - 1, 'prev');

    //other page (between first and last)
    if (curPage < numPages) {
      return (
        this._generateMarkupBtn(curPage - 1, 'prev') +
        this._generateMarkupBtn(curPage + 1, 'next')
      );
    }

    // only one page
    return '';
  }
}

export default new paginationView();
