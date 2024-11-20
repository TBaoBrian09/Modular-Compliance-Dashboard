import { lazy, Suspense } from "react";
import Loader from "../components/utility/fallbackSuspense"

const loaders = <Loader />;

export default function Async(importComponent) {
  const Component = lazy(importComponent)

  return props => (
    <Suspense fallback={loaders}>
      <Component {...props} />
    </Suspense>
  )
}