import { useEffect } from "react";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

function FallbackSuspense() {
  useEffect(() => {
    Nprogress.start();
    return () => {
      Nprogress.done();
    };
  });
}

export default FallbackSuspense;
