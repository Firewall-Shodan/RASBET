import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '~/modules';

import { IOddState } from './type';

const initialState: IOddState = {
  odds: [],
};

const oddSlice = createSlice({
  name: 'odds',
  initialState,
  reducers: {
    addOdd: (state, action: PayloadAction<any>) => {
      const index = state.odds.findIndex(
        (c) => c.gameId === action.payload.gameId
      );

      if (index >= 0) {
        if (action.payload.oddA) {
          state.odds[index].oddA = action.payload.oddA;
        }

        if (action.payload.oddE) {
          state.odds[index].oddE = action.payload.oddE;
        }

        if (action.payload.oddB) {
          state.odds[index].oddB = action.payload.oddB;
        }
      } else {
        if (action.payload.oddA) {
          state.odds.push({
            gameId: action.payload.gameId,
            oddA: action.payload.oddA,
            oddE: -1,
            oddB: -1,
          });
        }

        if (action.payload.oddE) {
          state.odds.push({
            gameId: action.payload.gameId,
            oddA: -1,
            oddE: action.payload.oddE,
            oddB: -1,
          });
        }

        if (action.payload.oddB) {
          state.odds.push({
            gameId: action.payload.gameId,
            oddA: -1,
            oddE: -1,
            oddB: action.payload.oddB,
          });
        }
      }
    },
    clear: (state) => {
      state.odds = [];
    },
  },
});

export const { addOdd, clear } = oddSlice.actions;

export default oddSlice.reducer;
