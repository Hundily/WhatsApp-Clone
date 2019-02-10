import { 
    StyleSheet 
} from 'react-native';
import colors from './colors';

const commons = StyleSheet.create({
    background: {
        backgroundColor: '#eff0f2'
    },
    screenTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: colors.dustyOrange,
        letterSpacing: 4,
        textAlign: 'center'
    },
    screenTitle2: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: colors.pineGreen,
        textAlign: 'left',
        marginLeft: 8
      },
    screenSubtitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center'
    },
    sessionTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        color: colors.pineGreen
    },
    labelTextInput: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: colors.pineGreen
    },
    textStyle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 13,
        color: colors.greyishBrown
    },
    textStyle2: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        color: colors.pineGreen,
        textAlign: 'center',
        // letterSpacing: 4
    },
    megaButton: {
        backgroundColor: colors.dustyOrange,
        padding: 16,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    megaButtonText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'center'
    },
    footerOption: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: colors.coolGrey,
        letterSpacing: 1.2,
        textAlign: 'center'
    },
    copyright: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: colors.coolGrey,
        letterSpacing: 0.9,
        textAlign: 'center'
    },
    screenTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.paleGrey
    },
    screenTitleView2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    relevanceView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    relevanceText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.coolGrey,
        textAlign: 'right',
        marginRight: 8
    }
});

export default commons;
