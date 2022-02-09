import { Provider } from "react-redux";
import AuthWrapper from "./components/AuthWrapper";
import AppRouter from "./components/router/AppRouter";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <AppRouter />
      </AuthWrapper>
    </Provider>
  );
}

export default App;
