import TripListView from '../view/trip-list-view';
import TripPointView from '../view/trip-point-view';
import TripPointCreatorView from '../view/trip-point-creator-view';
import TripPointEditorView from '../view/trip-point-editor-view';
import { render } from '../render';

export default class PointListPresenter {
  #pointList = new TripListView();
  #pointListContainer = null;
  #pointsModel = null;
  #pointListPoints = [];

  init(pointListContainer, pointsModel) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
    this.#pointListPoints = [...this.#pointsModel.points];

    render(this.#pointList, this.#pointListContainer);
    render(new TripPointEditorView(this.#pointListPoints[0]), this.#pointList.element);
    render(new TripPointCreatorView, this.#pointList.element);
    for (let i = 0; i < this.#pointListPoints.length; i++) {
      render(new TripPointView(this.#pointListPoints[i]), this.#pointList.element);
    }
  }
}
