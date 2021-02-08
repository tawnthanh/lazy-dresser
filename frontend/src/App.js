import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ProfilePage from "./components/ProfilePage";
import CreateItemForm from "./components/CreateItemForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ItemList from "./components/ItemList";
import EditItem from "./components/EditItem";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      { user &&
      <Navigation isLoaded={isLoaded} />
      }
      {isLoaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path="/" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/edit-profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/item/create" exact={true}>
            <CreateItemForm user={user}/>
          </Route>
          <Route path="/items" exact={true}>
            <ItemList user={user}/>
          </Route>
          <Route path="/item/:itemId/edit" exact={true}>
            <EditItem user={user}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
