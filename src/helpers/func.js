import _ from "lodash";
import queryString from "query-string";
import { createSearchParams } from "react-router-dom";

export function createChangeParams(setSearchParams, isPatch) {
  return function (params, options) {
    const newParams = isPatch
      ? params
      : {
        ...queryString.parse(window.location.search),
        ...params,
      };
    setSearchParams(createSearchParams(_.pickBy(newParams)), options);
  };
}
