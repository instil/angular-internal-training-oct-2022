import {FC, useState} from "react";
import {tagWrapperExercise} from "./TagWrapper";

enum RefreshStates {
  Idle,
  Clearing
}

function useForceRefresh(): [boolean, () => void] {
  const [refreshState, setRefreshState] = useState(RefreshStates.Idle);
  const forceRefresh = () => setRefreshState(RefreshStates.Clearing);

  if (refreshState === RefreshStates.Clearing) {
    setTimeout(() => setRefreshState(RefreshStates.Idle), 0);
    return [false, forceRefresh];
  }

  return [true, forceRefresh];
}

export const AddingTypesExercise: FC = () => {
  const [shouldClear, forceRefresh] = useForceRefresh();

  if (!shouldClear) return null;

  return (
    <div>
      <div>
        <button className="btn btn-primary mr-2" onClick={tagWrapperExercise}>Run Wrapper</button>
        <button className="btn btn-primary" onClick={forceRefresh}>Reset</button>
      </div>
      <hr/>
      <div id="target">
      </div>
    </div>
  );
}
