export enum Routes {
  // Tab Bar
  TabBar = 'TabBar',
  HomeStack = 'HomeStack',
  FabStack = 'FabStack',
  ScheduleStack = 'ScheduleStack',
  NotesStack = 'NotesStack',
  AccountStack = 'AccountStack',

  // Home Stack
  Home = 'Home',

  // Schedule Stack
  Schedule = 'Schedule',

  // Tasks stack
  AddTask = 'AddTask',

  // Notes Stack
  Notes = 'Notes',

  // Account Stack
  Account = 'Account',
}

export type RootStackParamList = {
  [Routes.TabBar]: undefined;
  [Routes.HomeStack]: undefined;
  [Routes.ScheduleStack]: undefined;
  [Routes.FabStack]: undefined;
  [Routes.NotesStack]: undefined;
  [Routes.AccountStack]: undefined;

  [Routes.Home]: undefined;
  [Routes.Schedule]: undefined;
  [Routes.AddTask]: undefined;
  [Routes.Notes]: undefined;
  [Routes.Account]: undefined;
};
