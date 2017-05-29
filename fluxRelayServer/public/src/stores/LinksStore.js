import {EventEmitter} from "fbemitter";
import {ActionTypes} from "../Constants";
import {MainDispatcher} from "../MainDispatcher";

const LINKS = Symbol("LINKS");

class LinksStore extends EventEmitter {

  constructor(props) {
    super(props);
    this[LINKS] = [];

    MainDispatcher.register(action => {
      switch (action.type) {
        case ActionTypes.RECIEVED_LINKS:
          this[LINKS] = action.links;
          this.emit("change", action.links);
          break;
        default:
      }
    })
  }

  getAllLinks() {
    return this[LINKS];
  }
}

export default new LinksStore();