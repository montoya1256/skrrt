import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import UploadPhotoFormPage from "./components/UploadPhotoFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PhotoDetailPage from "./components/PhotoDetailPage";
import PhotoBrowser from "./components/PhotoBrowser";
import Image from './components/PhotoBrowser/image'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" exact>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path='/upload' exact>
            <UploadPhotoFormPage />
          </Route>
          <Route path={['/', '/explore']} exact>
            <PhotoBrowser />
            <Image />
          </Route>
          <Route path='/photos/:photoId' exact>
            <PhotoDetailPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
