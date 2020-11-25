import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsNavSticky,
  setYOffset,
  updateYOffset,
} from '../../store/app/actions';

import { useScrollHandler } from './useScrollHandler';

export const useSticky = (): void => {
  const dispatch = useDispatch();

  const onScroll = () => {
    dispatch(updateYOffset(window.scrollY));
  };

  const onScrollCleanup = () => {
    dispatch(setIsNavSticky(true));
  };

  useScrollHandler(onScroll, onScrollCleanup);

  useEffect(() => {
    dispatch(setIsNavSticky(false));
    dispatch(setYOffset(1));
  }, []);
};
