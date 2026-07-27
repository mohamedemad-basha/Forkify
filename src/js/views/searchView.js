import view from './view.js';

class searchView extends view {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addSearchHandler(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
