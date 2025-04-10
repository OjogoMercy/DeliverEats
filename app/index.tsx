import { Text, View,TouchableOpacity,Image } from "react-native";
import { StatusBar } from "react-native";
import deliver from '../assets/images/deliver.png'
import pizza from '../assets/images/pizza.png'
import { MotiImage } from 'moti';

export default function Index() {
  return (
   <View style={{flex:1,backgroundColor:'#fdba4f'}}>
    <StatusBar backgroundColor={'#fdba4f'}/>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>DeliverEats</Text>
      <Image source={pizza} style={{height:25,width:25}}/>
    </View>
    <MotiImage source={deliver}
     from={{ opacity: 0, scale: 0.8, translateX:-200 }}
     animate={{ opacity: 1, scale: 1 ,translateX:0}}
     transition={{ type: 'timing', duration: 1500 }}
     style={{height:270,width:270,marginTop:70,alignSelf:'center'}}/>
    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:95,marginTop:55}}>Craving Delicious Food?</Text>
    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:65}}>We'll Bring It To You In No Time!</Text>
    <TouchableOpacity style={{backgroundColor:'white',borderRadius:10,height:50,width:'85%',elevation:5,marginTop:100,alignSelf:'center',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold',marginLeft:120}}>Sign Up</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',marginTop:100,justifyContent:'center'}}>
    <Text>Already Have an Account?</Text>
    <Text style={{fontWeight:'bold'}}>Log In</Text>
    </View>
   </View>
  );
}
