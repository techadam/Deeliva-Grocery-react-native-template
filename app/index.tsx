import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Redirect, useRootNavigation } from 'expo-router'

const Onboarding = () => {
  const navigation = useRootNavigation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!navigation?.isReady) return;

    setReady(true);
  }, [navigation?.isReady]);

  if (ready) return <Redirect href="/sign-in" />;

  // return <LoadingScreen />;
}

export default Onboarding

const styles = StyleSheet.create({})