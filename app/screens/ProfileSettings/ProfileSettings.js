import React, { Component } from 'react';
import { View } from 'react-native';

//Components
import ThreeDots from "../../components/ThreeDots";

class ProfileSettings extends Component {
  state = {  }
  render() { 
    return ( 
      <View>
        <ThreeDots {...this.props}/>
      </View>
    );
  }
}
 
export default ProfileSettings;