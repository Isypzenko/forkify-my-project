import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _messageError = 'No recipe could be found. Please, try another one !';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new resultsView();
