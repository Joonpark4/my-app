import {configureStore, configurestore} from '@reduxjs/toolkit';
import {counterReducer} from './reducer';

export const store=configureStore({reducer:counterReducer});
