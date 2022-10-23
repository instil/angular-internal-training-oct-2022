import {useEffect} from "react";

export function useOnce(func: Function) {
  useEffect(() => {
    func();
  }, [func])
}
