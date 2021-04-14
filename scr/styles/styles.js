import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    mainBackground: {
        width:'100%',
        height:847,
        backgroundColor:'#E5E5E5',
    },
    mainSonOne:{
        flexDirection:"row",
        width:'100%',
        justifyContent:'space-between',
        alignContent:'center',
        padding: 20,
    },
    clockGroup:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
    },
    clockGroupText:{
        marginVertical:1,
        fontSize:14,
        paddingLeft:5,
    },
    clockGroupRectangle:{
        marginTop:7,
        height:41,
        width: 112,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:30,

        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    plusGroup:{
        flexDirection:"row",
        alignItems: 'center',
    },
    plusGroupEllipse:{
        width: 55,
        height: 55,
        borderRadius: 55/2,
        padding: 10,
        marginLeft:10
    },
    plusGroupSmallEllipse:{
        width: 20,
        height: 20,
        borderRadius: 25/2,
        borderColor:'#8C93A2',
        borderWidth:  1.5,
        borderStyle:'solid',
        alignItems:'center',
        marginLeft:10
    },
    plusGroupNumber:{
        fontSize: 12,
        color:'#8C93A1',
    },

    /////////////////////////////

    myAccountText:{
        paddingLeft:20,
        fontSize:24,
        color:'#0C0C0E',
        fontWeight: "bold",
    },
    storeGroup:{
        // marginTop:10,
        // marginLeft:20,
        justifyContent:'space-between',
        alignContent:'center',
        flexDirection:"row",
        width:'100%',
        padding: 10,
    },
    storeGroupProcent:{
        width: 44,
        height: 22,
        borderRadius: 44/2,
        marginBottom: 10,
    }

});

export default styles