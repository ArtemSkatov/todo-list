// eslint-disable-next-line boundaries/element-types
import { AppDispatch, RootState } from "@/app/providers/store";

// eslint-disable-next-line import/order
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
