import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// tailwindcss 
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import OnboardingScreen1 from './src/screens/onboarding/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/onboarding/OnboardingScreen2';

const AppStack = createNativeStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <AppStack.Navigator>
      {/* <AppStack.Screen name="Homepage" component={Homepage} /> */}
      {/* <AppStack.Screen name="OnboardingScreen 1" component={OnboardingScreen1} /> */}
      <AppStack.Screen name="OnboardingScreen 2" component={OnboardingScreen2} />
    </AppStack.Navigator>
   </NavigationContainer>
  );
};

export default App;
