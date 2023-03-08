import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

type MainLayoutProps = PropsWithChildren;
const MainLayout = ({children}: MainLayoutProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.mainLayoutContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  mainLayoutContainer: {
    width: '100%',
    height: '100%',
  },
});
