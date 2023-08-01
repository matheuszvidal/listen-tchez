import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const TchezContext = createContext();

function TchezProvider({ children }) {

  const values = useMemo(() => ({
  }), []);

  return (
    <TchezContext.Provider value={ values }>
      {children}
    </TchezContext.Provider>
  );
}

export const useTchez = () => {
  const context = useContext(TchezContext);
  return context;
};

TchezProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TchezProvider;