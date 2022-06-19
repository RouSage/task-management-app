import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import theme from '@theme';
import { Box } from 'native-base';
import { useMemo } from 'react';
import {
  Pressable,
  StyleProp,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import NotesStack from './NotesStask';
import ScheduleStack from './ScheduleStack';
import PlusButton from './components/PlusButton';
import TabBarBG from './components/TabBarBG';
import TabBarIcon from './components/icons/TabBarIcon';
import { Routes } from './types';

const TAB_BAR_BTN_TRANSFORM_X = 10;
const ANIMATION_CONFIG = {
  duration: 200,
  easing: Easing.linear,
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const FabPlaceholder = () => <Box />;

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const { bottom: bottomInset } = useSafeAreaInsets();

  const animation = useSharedValue(0);

  const isSmall = screenHeight < 812;

  const tabBarItemStyle: StyleProp<ViewStyle> = {
    paddingTop: 15,
  };

  // tab bar buttons animations
  const tabBarBtnFirst = useAnimatedStyle(() => ({
    transform: [{ translateX: -animation.value * TAB_BAR_BTN_TRANSFORM_X }],
  }));

  const tabBarBtnSecond = useAnimatedStyle(() => ({
    transform: [{ translateX: -animation.value * TAB_BAR_BTN_TRANSFORM_X * 3 }],
  }));

  const tabBarBtnThird = useAnimatedStyle(() => ({
    transform: [{ translateX: animation.value * TAB_BAR_BTN_TRANSFORM_X * 3 }],
  }));

  const tabBarBtnFourth = useAnimatedStyle(() => ({
    transform: [{ translateX: animation.value * TAB_BAR_BTN_TRANSFORM_X }],
  }));

  const buttonStyles = useMemo<
    Record<string, { transform: { translateX: number }[] }>
  >(
    () => ({
      [Routes.HomeStack]: tabBarBtnFirst,
      [Routes.ScheduleStack]: tabBarBtnSecond,
      [Routes.NotesStack]: tabBarBtnThird,
      [Routes.AccountStack]: tabBarBtnFourth,
    }),
    [tabBarBtnFirst, tabBarBtnSecond, tabBarBtnThird, tabBarBtnFourth]
  );

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <>
          <BottomTabBar {...props} />
          {!isSmall && (
            <Box
              bg='white.50'
              position='absolute'
              h={`${bottomInset}px`}
              bottom={0}
              left={0}
              right={0}
            />
          )}
        </>
      )}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary['50'],
        tabBarInactiveTintColor: theme.colors.primary['50'],
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          shadowColor: theme.colors.black['100'],
          shadowOffset: { height: 4, width: 0 },
          shadowOpacity: 0.24,
          shadowRadius: 4,
        },
        tabBarBackground: () => (
          <TabBarBG width={screenWidth} animationValue={animation} />
        ),
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon color={color} focused={focused} routeName={route.name} />
        ),
        tabBarButton: (props) => (
          <AnimatedPressable
            {...props}
            style={[props.style, buttonStyles[route.name]]}
          />
        ),
      })}
      screenListeners={({ route }) => ({
        focus: () => {
          if (
            route.name === Routes.HomeStack ||
            route.name === Routes.ScheduleStack
          ) {
            animation.value = withTiming(1, ANIMATION_CONFIG);

            return;
          }

          animation.value = withTiming(0, ANIMATION_CONFIG);
        },
      })}>
      <Tab.Screen
        name={Routes.HomeStack}
        component={HomeStack}
        options={{
          tabBarItemStyle,
        }}
      />
      <Tab.Screen
        name={Routes.ScheduleStack}
        component={ScheduleStack}
        options={{
          tabBarItemStyle,
        }}
      />
      <Tab.Screen
        name={Routes.FabStack}
        component={FabPlaceholder}
        options={{
          tabBarIcon: () => (
            <Box>
              <PlusButton animationValue={animation} />
            </Box>
          ),
          tabBarButton: (props) => (
            <Pressable {...props} style={[props.style, { flex: 0 }]} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(Routes.AddTask);
          },
        })}
      />
      <Tab.Screen
        name={Routes.NotesStack}
        component={NotesStack}
        options={{
          tabBarItemStyle,
        }}
      />
      <Tab.Screen
        name={Routes.AccountStack}
        component={AccountStack}
        options={{
          tabBarItemStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
