import {useEffect} from "react";

export function useKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
}
