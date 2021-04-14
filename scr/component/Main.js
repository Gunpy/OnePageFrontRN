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
import MinLeft from "../assets/MinLeft"
import MinRight from  "../assets/MinRight"
import MinUp from "../assets/MinUp"

const Main = () => {
    let money = '$1,340.10'
    let number = 2
    let myAccount = 'My accounts'

    return(<>
    <ScrollView
        showsVerticalScrollIndicator ={false}
    >
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
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{
                            flexDirection:"row",
                            alignItems:'baseline',
                            // height:'100%',
                            width:'45%',
                            backgroundColor:'#FFFFFF',
                            borderRadius:6,
                            marginLeft:10,
                        }}>
                    <View>
                        <View>
                        <View style={styles.heartEllips}>
                            <Heart/>
                            <View style={styles.crossEllips}>
                                <Cross/>
                            </View>
                        </View>
                        <Image
                            style={{
                                width:285,
                                height:159,
                                marginTop:4,
                                zIndex:-1,
                                right:10,
                            }}
                            source={require('../assets/Rectangle.png')}/>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-around',
                            bottom:15
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


                    {/*<View style={{height:100,width:100,backgroundColor:'#123213'}}></View>*/}
                        <View style={{
                            flexDirection:"row",
                            alignItems:'baseline',
                            // height:'100%',
                            // width:'91%',
                            width:'45%',
                            backgroundColor:'#FFFFFF',
                            borderRadius:6,
                            marginLeft:10
                        }}>
                            <View>
                                <View>
                                    <View style={styles.heartEllips}>
                                        <Heart/>
                                        <View style={styles.crossEllips}>
                                            <Cross/>
                                        </View>
                                    </View>
                                    <Image
                                        style={{
                                            width:285,
                                            height:159,
                                            marginTop:4,
                                            zIndex:-1,
                                            right:10,
                                        }}
                                        source={require('../assets/Rectangle.png')}/>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'space-around',
                                    bottom:15
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
                    </ScrollView>
                </View>
                <View style={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    marginLeft:20,
                    width:'90%',
                    height:'12%',
                    borderRadius:5,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    //shadow
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Text style={{
                        color:'rgba(86,133,253,1)',
                        fontSize:16,
                        marginLeft:30,
                        fontWeight: '500',
                    }}>
                        Spendings
                    </Text>
                    <Text style={{
                        fontSize:17,
                        marginRight:20,
                        fontWeight:'bold'
                    }}>
                        $ 137,000
                    </Text>
                </View>

                <View style={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    marginLeft:20,
                    width:'90%',
                    height:'12%',
                    borderRadius:5,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    //shadow
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,
                    elevation: 1,
                }}>
                    <View  style={{
                        height:'20%',
                        width:'20%',
                    }}>
                        <MinLeft/>
                    </View>
                    <Text style={{
                        fontSize:17,
                        fontWeight: '500',
                    }}>
                        January
                    </Text>
                    <View style={{
                        height:'20%',
                        width:'20%',
                    }}>
                        <MinRight/>
                    </View>
                </View>

                <View style={{
                    marginTop:10,
                    marginLeft:20,
                    width:'90%',
                    height:'6%',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}>
                        <Text style={{
                            color:'rgb(0,0,0)',
                            fontSize:16,
                            fontWeight: 'bold',
                        }}>Barclays bank</Text>
                        <View style={{
                            height:'25%',
                            width:'20%',
                            paddingLeft:50,
                        }}>
                            <MinUp/>
                        </View>
                </View>
            </View>
            <View style={{
                width:195,

            }}>
                <Image
                    style={{
                        zIndex:-1,
                        marginLeft:20
                    }}
                    source={require('../assets/BankCard.png')}/>
                <Text>eherhркерке</Text>
            </View>
        </View>
    </ScrollView>
    </>)
}

export default Main


