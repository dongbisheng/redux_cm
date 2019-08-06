import AppDispatcher from '../Dispacher'
import {EventEmitter} from 'events'
import CounterStore from './CounterStore'
import * as ActionsType from '../ActionTypes'

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (let key in counterValues){
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummarySotre = Object.assign({}, EventEmitter.prototype, {
   getSummary: function () {
       return computeSummary(CounterStore.getCounterValues());
   },
   emitChange: function () {
       this.emit(CHANGE_EVENT)
   } ,
   addChangeListener: function (callback) {
       this.on(CHANGE_EVENT, callback);
   },
   removeChangeListener: function (callback) {
       this.removeListener(CHANGE_EVENT, callback);
   }
});

SummarySotre.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === ActionsType.DECREMENT
        || action.type === ActionsType.INCREMENT){
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummarySotre.emitChange();
    }
})

export default SummarySotre;
