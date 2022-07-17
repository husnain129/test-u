export type TSideBarData = 'Dasboard' | 'Quizez' | 'History' | 'Profile';
export type TSideBarProps = {
  selectedSidebarItem: TSideBarData;
  // eslint-disable-next-line no-unused-vars
  setSelectedSidebarItem: (item: TSideBarData) => void;
};

export const SiderBarData: TSideBarData[] = [
  'Dasboard',
  'Quizez',
  'History',
  'Profile',
];
