import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authSessionReducer from "../../modules/auth/services/reducers/auth.session.slice.ts";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  authSession: authSessionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authSession"],
};

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
