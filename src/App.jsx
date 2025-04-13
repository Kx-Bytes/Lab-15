// App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import FocusForm from './components/FocusForm';
import Content from './components/Content';
import { CounterUseReducer, CounterUseState } from './components/Counter';
import Footer from './components/Footer';
import FormRef from './components/FormRef';
import FormState from './components/FormState';
import JokeFetcher from './components/JokeFetcher';
import LifecycleDemo from './components/LifeCycleDemo';
import MessageParent from './components/MessageParent';
import { StyledButtonExternal } from './components/StyledButton';
import './App.css';


function AppContent() {
  const { theme } = useTheme(); // get current theme (light or dark)

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <ThemeToggle />
      <FocusForm />
      <Content />
      <CounterUseState />
      <CounterUseReducer />
      <FormRef />
      <FormState />
      <JokeFetcher />
      <LifecycleDemo />
      <MessageParent />
      <StyledButtonExternal />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
