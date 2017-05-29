import {MainDispatcher} from "../MainDispatcher"
import {ActionTypes} from "../Constants";

export const ServerActions = {
  recieveLinks(links){
    MainDispatcher.dispatch({
      type: ActionTypes.RECIEVED_LINKS,
      links
    })
  }
};