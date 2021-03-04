import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    Dimensions, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from '../redux/cart';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item } = this.props
        const { title, description, poster } = item
        return (
            <View style={{ flex: 1, backgroundColor: '#DCDCDC' }}>
                <TouchableOpacity
                        onPress={() =>
                            {
                                this.props.navigation.navigate('Login',)
                            } }
                    style={styles.containerWord}>
                    <View style = {{ marginTop:5,
                        justifyContent:'center',alignContent:'center',
                        marginHorizontal:10, marginBottom:5}}>
                        <Text style={styles.texttitle}>{title.s}</Text>
                    </View>
                    <Image
                        style={styles.imageProduct}
                        source={{ uri: poster.s }}
                    />
                    <View style={{justifyContent:'center',alignContent:'center',
                        marginHorizontal:10}}>
                        <Text style ={ styles.textdesc}>{ description.s}</Text>
                    </View>


                </TouchableOpacity>

            </View>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) - 15
const widthImage = Math.round(width / 2) - 15

const mapStateToProps = (state) => {
    return ({
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        dispatch,
        addCart: (product) => (dispatch(CartActions.addCart(product))),
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
const styles = StyleSheet.create({
    containerWord: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#DCDCDC',


    },
    texttitle: {
        color: 'red',
        fontSize: 15,
        alignContent: 'center',
        marginHorizontal: 5,
    },
    textt: {
        fontSize: 20,
        color: 'red',
        marginTop: 5,
        alignContent: 'center'
    },
    imageProduct: {
        width: widthImage,
        height: heightImage,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 5,
        alignContent: 'center'
    },
    textdesc: {
        color: '#4000FF',
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 5,
        fontWeight:'500'
        

    }
})
