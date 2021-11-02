export type RootStackParamList = {
  Home: undefined;
  // About: undefined;
  List: undefined;
  Messenger: undefined;
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
  Loading: undefined;
  ListContainer: undefined;
  SharedContainer: undefined;
};
