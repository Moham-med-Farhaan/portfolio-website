import React, { lazy } from "react";
import PageService from "./page-service";
import { Suspense } from "react";
const HomeList = lazy(() => import("../sections/home/list"));

function Home() {
  return (
    <Suspense fallback={"loading"}>
      <PageService title={"home"}>
        <nav>nav section</nav>
        <HomeList />
      </PageService>
    </Suspense>
  );
}

export default Home;
