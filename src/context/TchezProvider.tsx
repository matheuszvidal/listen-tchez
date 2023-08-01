import { ReactNode, createContext, useContext, useMemo } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

interface TchezContextValue {
  // Define the properties of your context value here
  // For example:
  someData: string;
}

const TchezContext = createContext<TchezContextValue>({
  // Provide the initial/default values for your context
  // For example:
  someData: 'default value',
});

const TchezProvider = ({ children } : MyComponentProps) => {
  const values = useMemo<TchezContextValue>(() => ({
    // Populate the actual values for your context here
    // For example:
    someData: 'Hello from context',
  }), []);

  return (
    <TchezContext.Provider value={values}>
      {children}
    </TchezContext.Provider>
  );
};

export const useTchez = () => {
  const context = useContext(TchezContext);
  return context;
};

export default TchezProvider;