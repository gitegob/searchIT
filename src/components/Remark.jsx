import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const Remark = () => {
  const { cities } = useContext(GlobalContext);
  const display = cities.length === 0 ? 'block' : 'none';

  return (
    <div className="remark" style={{ display: display }}>
      Sorry! We can&apos;t find that city.
    </div>
  );
};
