import React,{Component} from "react"
import Main from "./Main";
import { Provider } from 'react-redux';
import { store } from './redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}><Main /></Provider>
    );
  }
}