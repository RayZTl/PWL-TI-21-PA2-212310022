import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterTwo } from "../modules/chapter-2";
import Auth from "../modules/chapter-2/widgets/authentifications";


export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo />} />
        <Route path="home" element={<Home />} />
        <Route path="signIn" element={<Auth />} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

const Error = () => {
  return <h1>Error 404 Not Found</h1>
}
const Home = () => {
  return <h3>Ini home looo…</h3>;
};
