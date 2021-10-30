export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ScreenOne: undefined;
  List: undefined;
  Messenger: undefined;
  Firebase: undefined;
  Shared: undefined;
  Details: { 
    data: {
      age: number | undefined
      details: string
      name: string
      id: string
      imageUrl: string | undefined
    } 
  };
  ListDetailScreen: { 
    data: {
      age: number | undefined
      details: string
      name: string
      id: string
      imageUrl: string | undefined
    } 
  };
  ListContainer: undefined;
  SharedContainer: undefined;
};
