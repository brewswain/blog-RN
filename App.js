import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  CreateScreen,
  EditScreen,
  IndexScreen,
  ShowScreen,
} from "./src/screens";
import { Provider } from "./src/contexts/Blog.context";

const navigator = createStackNavigator(
  {
    Create: CreateScreen,
    Edit: EditScreen,
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
