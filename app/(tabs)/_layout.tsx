import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
  return <Tabs screenOptions={{ tabBarActiveTintColor: 'coral'}}>
    {/* Home Tab */}
    <Tabs.Screen name="index" options={{title: 'Home',
      tabBarIcon: ({color}) => (
        <AntDesign name="home" size={24} color={color} />
      )}}
      >

    </Tabs.Screen>

    {/* Login Tab */}
    <Tabs.Screen name="report" options={{title: 'Report',
      tabBarIcon: ({color}) => (
        <Octicons name="report" size={24} color={color} />
      )}}
    />

    {/* settings Tab */}
    <Tabs.Screen name="settings" options={{title: 'settings',
      tabBarIcon: ({color}) => (
        <Ionicons name="settings-outline" size={24} color={color} />
      )}}
    />
  </Tabs>
}
