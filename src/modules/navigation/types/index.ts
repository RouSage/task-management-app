export enum Routes {
  // Tab Bar
  TabBar = 'TabBar',
  HomeStack = 'HomeStack',
  ScheduleStack = 'ScheduleStack',
  NotesStack = 'NotesStack',
  AccountStack = 'AccountStack',

  // Home Stack
  Home = 'Home',

  // Schedule Stack
  Schedule = 'Schedule',

  // Notes Stack
  Notes = 'Notes',

  // Account Stack
  Account = 'Account',
}

export type RootStackParamList = {
  [Routes.TabBar]: undefined;
  [Routes.HomeStack]: undefined;
  [Routes.ScheduleStack]: undefined;
  [Routes.NotesStack]: undefined;
  [Routes.AccountStack]: undefined;

  [Routes.Home]: undefined;
  [Routes.Schedule]: undefined;
  [Routes.Notes]: undefined;
  [Routes.Account]: undefined;
};
