import Profile from '../../../src/components/user/profile';
import {fetchMessage} from '../../../src/actions';
import {renderComponent, expect} from '../../test_helper';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore(middlewares);
const middlewares = [thunk];
