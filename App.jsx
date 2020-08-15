import React from "react";
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from "react-native";
import axios from "axios"
import Weather from "./Weather";

const API_KEY = "a2d781c6e5eaf980abee3f81753673e0"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log();
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
    
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("에러", "위치정보를 찾을 수 없습니다. 잠시후에 시도해주세요");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} />
    );
  }
}

