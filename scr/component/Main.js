import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from '../styles/styles';
import Timer from '../assets/Timer';
import Plus from '../assets/Plus';
import Heart from '../assets/Heart';
import Cross from '../assets/Cross';
import MinLeft from '../assets/MinLeft';
import MinRight from '../assets/MinRight';
import MinUp from '../assets/MinUp';
import Trash from '../assets/Trash'
import MinDown from '../assets/MinDown'
import Block from '../assets/Block'
import Union from '../assets/Union'

const Main = () => {
    let money = '$1,340.10';
    let number = 2;
    let myAccount = 'My accounts';

    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{width: '100%', backgroundColor: '#E5E5E5'}}>
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
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            style={styles.plusGroupEllipse}>
                            <Plus/>
                        </LinearGradient>
                        <View style={styles.plusGroupSmallEllipse}>
                            <Text style={styles.plusGroupNumber}>{number}</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 400}}>
                    <Text style={styles.myAccountText}>{myAccount}</Text>
                    <View style={styles.storeGroup}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View
                                style={styles.whiteBlock}>
                                <View>
                                    <View>
                                        <View style={styles.heartEllips}>
                                            <Heart/>
                                            <View style={styles.crossEllips}>
                                                <Cross/>
                                            </View>
                                        </View>
                                        <Image
                                            style={styles.Rectangle}
                                            source={require('../assets/Rectangle.png')}
                                        />
                                    </View>
                                    <View
                                        style={styles.whiteBlockStyle}>
                                        <View>
                                            <Text
                                                style={styles.reStortText}>
                                                re: Store
                                            </Text>
                                            <Text
                                                style={styles.electronicsText}>
                                                Electronics
                                            </Text>
                                        </View>
                                        <View>
                                            <LinearGradient
                                                colors={['#a384f3', '#94ddf4']}
                                                start={{x: 0, y: 0}}
                                                end={{x: 1, y: 0}}
                                                style={styles.storeGroupProcent}>
                                                <Text
                                                    style={styles.gradientSon}>
                                                    15%
                                                </Text>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={styles.ellipseMom}>
                                <View>
                                    <View>
                                        <View style={styles.heartEllips}>
                                            <Heart/>
                                            <View style={styles.crossEllips}>
                                                <Cross/>
                                            </View>
                                        </View>
                                        <Image
                                            style={styles.rectangleImg}
                                            source={require('../assets/Rectangle.png')}
                                        />
                                    </View>
                                    <View
                                        style={styles.whiteBlockStyle}>
                                        <View>
                                            <Text
                                                style={styles.reStortText}>
                                                re: Store
                                            </Text>
                                            <Text
                                                style={styles.electronicsText}>
                                                Electronics
                                            </Text>
                                        </View>
                                        <View>
                                            <LinearGradient
                                                colors={['#a384f3', '#94ddf4']}
                                                start={{x: 0, y: 0}}
                                                end={{x: 1, y: 0}}
                                                style={styles.storeGroupProcent}>
                                                <Text
                                                    style={styles.gradientSon}>
                                                    15%
                                                </Text>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View
                        style={styles.minBlock}>
                        <Text
                            style={styles.spendText}>
                            Spendings
                        </Text>
                        <Text
                            style={styles.moneyText}>
                            $ 137,000
                        </Text>
                    </View>

                    <View
                        style={styles.montBlock}>
                        <View
                            style={styles.monBlockSize}>
                            <MinLeft/>
                        </View>
                        <Text
                            style={styles.mountText}>
                            January
                        </Text>
                        <View
                            style={styles.minRight}>
                            <MinRight/>
                        </View>
                    </View>

                    <View
                        style={styles.barcleyFirst}>
                        <Text
                            style={styles.barclText}>
                            Barclays bank
                        </Text>
                        <View
                            style={styles.minUp}>
                            <MinUp/>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.cardBlock}>
                    <Image
                        style={styles.cardStyleOne}
                        source={require('../assets/BankCard.png')}
                    />
                    <Image
                        style={styles.visaLogo}
                        source={require('../assets/VisaLogo.png')}
                    />
                    <View style={styles.circleOne}/>
                    <View style={styles.circleTwo}/>
                    <Text style={styles.cardNumber}>4355</Text>
                    <Text style={styles.moneyCard}>$84,000.54</Text>
                    <Text style={styles.nameBankCard}>Tinkoff Black</Text>
                    <View style={styles.positionCard}>
                        <Trash/>
                    </View>
                    <Image style={styles.bankCardBlue}
                           source={require('../assets/BankCardBlue.png')}
                    />
                    <Image
                        style={styles.masterCard}
                        source={require('../assets/MasterCard.png')}
                    />
                    <View style={styles.circleThree}/>
                    <View style={styles.circleFour}/>
                    <Text style={styles.moneyBlueCard}>$125,000</Text>
                    <Text style={styles.bankBlueCard}>Tinkoff Black</Text>
                    <View style={styles.trashBlueCard}>
                        <Trash/>
                    </View>
                </View>
                <View
                    style={styles.barclayTwoPosition}>
                    <Text
                        style={styles.barckBatnkTextTwo}>
                        Barclays bank
                    </Text>
                    <View
                        style={styles.minDown}>
                        <MinDown/>
                    </View>
                </View>
                <View
                    style={styles.lastBlock}>
                    <View
                        style={styles.blockImg}>
                        <Block/>
                    </View>
                    <Image
                        style={styles.walletImg}
                        source={require('../assets/Wallet.png')}
                    />
                    <Text style={{marginTop: 35,}}>
                        Account
                    </Text>
                    <View
                        style={styles.unionImg}>
                        <Union/>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};

export default Main;

