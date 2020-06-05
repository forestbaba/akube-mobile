import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Animated, Image, TouchableOpacity, FlatList } from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign'
// import { SvgUri } from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';

import Track from './track.svg'
import NewSvg from './assets/new.svg';
import Topitem from './assets/top.svg'
import Trending from './assets/graph.svg'
import Clothing from './assets/clothing.svg'
import Shoes from './assets/sport.svg'
import Hanger from './assets/hanger.svg'
import Accessories from './assets/winter-hat.svg'
import GridView from './components/List/gridView'
import ParentStack from './components/routes/ParentStack'


// class App extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       fadeIn: new Animated.Value(0),
//       animatedValue: new Animated.Value(0),
//       parentYPosition: 0,
//       menu: [
//         { name: 'Home', id: '0', icon: 'home' },
//         { name: 'Saved', id: '1', icon: 'hearto' },
//         { name: 'Search', id: '2', icon: 'search1' },
//         { name: 'Profile', id: '3', icon: 'user' },
//       ],
//       iconstyles: [styles.icon_and_title],
//       clickedMenu: 0,



//     }

//     this.onPressMenu = this.onPressMenu.bind(this);


//   }

//   onMenuClicked = id => {
//     // console.warn('Just one')
//     Animated.timing(          // Animate over time
//       this.state.fadeIn,    // The animated value to drive
//       {
//         toValue: 1,           // Animate to opacity: 1 (opaque)
//         duration: 1000,       // 2000ms
//       }
//     ).start();

//     this.setState({ clickedMenu: id })


//   }

//   onPressMenu = id => {
//     console.warn('New: ', id)
//   }




//   renderMenu() {
//     console.warn('RRR: ', this.state.clickedMenu)
//     if (this.state.clickedMenu === 0) {
//       return (<FlatList
//         contentContainerStyle={styles.list}
//         data={this.state.gridList}
//         renderItem={this.renderItem}
//       />)
//     }

//   }



//   render() {

//     let { fadeIn } = this.state

//     const { iconstyles, clickedMenu } = this.state

//     return (
//       <View style={styles.container}>
//         <StatusBar hidden={false} />
//         <View style={styles.containerTool}>
//           <Text style={styles.toolbar}>Akube</Text>
//         </View>
//         <View style={styles.navbar_button}>
//           {
//             this.state.menu.map(item => {
//               return (
//                 <TouchableOpacity onPress={() => this.onMenuClicked(item.id)} id={item.id}>
//                   <View style={clickedMenu !== item.id ? styles.icon_and_title : styles.clickedMenu}>
//                     <Animated.View style={{
//                       opacity: 1,
//                       // opacity: fadeIn,
//                     }}>
//                       <AIcon name={item.icon} size={25} color="black" style={{ ...styles.icon }} />
//                     </Animated.View>
//                     <Text>{item.name}</Text>
//                   </View>
//                 </TouchableOpacity>
//               )
//             })
//           }


//         </View>

//         <View style={{ marginBottom: 140 }}>


//           {this.renderMenu()}
//         </View>

//       </View>
//     );
//   }
// }

const App = () => {
  return (
    // <View>
    <ParentStack />
    // </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#eb3345",
    // justifyContent: "flex-end",
  },
  navbar_button: {

    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1000
  },
  icon_and_title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  icon: {
    // marginHorizontal: 5,
  },
  extra: {
    borderRadius: 25,
    backgroundColor: '#b8cbf9',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  clickedMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    backgroundColor: '#b8cbf9',
    paddingHorizontal: 15,
    paddingVertical: 5

    // paddingVertical: 10
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  toolbar: {
    position: 'absolute',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  containerTool: {
    height: 70,
    // padding:20,
    // backgroundColor: '#FFF',
    // justifyContent: 'center',
    // alignItems:'flex-start',
    // shadowColor: '#000',
    // shadowOffset: { width: 5, height: 2 },
    // shadowOpacity: 0.8,

  }


});


//https://www.pinterest.com/pin/327566572898372926/

export default App;