import React from "react";
    import LinearGradient from 'react-native-linear-gradient';
import {
    Text,
    View,
    ScrollView,
    Image,
    } from "react-native";
import styles from "../styles/styles";
import Timer from "../assets/Timer";
import Plus from "../assets/Plus";
import Heart from "../assets/Heart"
import Cross from "../assets/Cross"


const Main = () => {
    let money = '$1,340.10'
    let number = 2
    let myAccount = 'My accounts'

    return(<>
        <View style={styles.mainBackground}>
            <View style={styles.mainSonOne}>
            <View style={styles.clockGroupRectangle}>
                <View style={styles.clockGroup}>
                    <Timer/>
                    <Text style={styles.clockGroupText}>{money}</Text>
                </View>
                </View>
                <View style={styles.plusGroup}>
                    <Text>Add bank</Text>
                    <LinearGradient
                        colors={['#a384f3', '#94ddf4']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.plusGroupEllipse}
                    >
                        <Plus/>
                    </LinearGradient>
                    <View style={styles.plusGroupSmallEllipse}>
                        <Text style={styles.plusGroupNumber}>{number}</Text>
                    </View>
                </View>
            </View>
            <View style ={styles.mainSonTwo}>
                <Text style={styles.myAccountText}>{myAccount}</Text>
                <View  style={styles.storeGroup}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{
                            flexDirection:"row",
                            alignItems:'baseline',
                            // justifyContent:'space-between',
                            // height:'100%',
                            backgroundColor:'#FFFFFF',
                            borderRadius:6,
                        }}>
                    <View>
                        <Image
                            style={{
                                width:285,
                                height:159,
                                marginTop:5
                            }}
                            source={require('../assets/Rectangle.png')}/>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-around',
                        }}>
                            <View>
                                <Text  style={{
                                    fontSize:24,
                                    fontWeight: "bold",
                                }}>re: Store</Text>
                                <Text style={{
                                    color:'#A8ADB7',
                                    fontSize:14,
                                }}>Electronics</Text>
                            </View>
                            <View>
                                <LinearGradient
                                    colors={['#a384f3', '#94ddf4']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.storeGroupProcent}
                                >
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'Gill Sans',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        backgroundColor: 'transparent',
                                    }}>
                                        15%
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>

                        </View>
                    <View style={{height:100,width:100,backgroundColor:'#123213'}}></View>
                    </ScrollView>
                </View>
            </View>

        </View>
    </>)
}

export default Main


