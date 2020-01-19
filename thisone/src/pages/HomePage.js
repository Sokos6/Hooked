import React, { useEffect, useContext } from 'react';
import { StateContext } from '../contexts';

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  const { error } = state;

  return (
    <div>

    </div>
  )
}