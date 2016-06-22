import { createStore } from 'redux'
import tooltip from '../reducer/reducer'

export default function configureStore(initState){
    const store = createStore(tooltip, initState);
    return store;
}