import { Tabs } from "expo-router";
import { Foundation, MaterialIcons } from "@expo/vector-icons";

import { theme } from "@/theme";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
        }
      }}
    >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({size, color}) =>(
              <Foundation name="home" size={size} color={color}/>
            )
          }}
        />

        <Tabs.Screen
          name="movies"
          options={{
            tabBarIcon: ({size, color}) =>(
              <MaterialIcons name="local-movies" size={size} color={color}/>
            )
          }}
        />
    </Tabs>
)
}