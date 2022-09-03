import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// 最初のユーザー状態を定義
const initialState = {
  // user: null,
  user: {
    _id: "63087631c591bf15eff8a0a0",
    username: "tee",
    email: "tee@gmail.com",
    password: "password",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

// contextを返すコンポーネントを作成
export const AuthContextProvider = ({ children }) => {
  // reducerを使う準備
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
