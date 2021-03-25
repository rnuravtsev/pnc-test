import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Loading from "../commons/loading/loading";
// import SkeletonApp from "../skeleton-app/skeleton-app";
import BaseLayout from "../base-layout/base-layout";
import MainScreen from "../../screens/main-screen/main-screen";
// import PokemonsScreen from "../../screens/pokemons-screen/pokemons-screen";
// import ContactsScreen from "../../screens/contacts-screen/contacts-screen";

// import { pokemonsType } from "../../common-prop-types";

const App = () => {
  // const { initApplication } = props;
  // React.useEffect(() => {
  //   initApplication();
  // }, [initApplication]);

  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route
              exact
              path="/"
              component={MainScreen}
            />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </>
  );
};

// App.propTypes = {
//   pokemons: pokemonsType,
//   isAppReady: PropTypes.bool.isRequired,
//   initApplication: PropTypes.func.isRequired,
// };

export default App;
