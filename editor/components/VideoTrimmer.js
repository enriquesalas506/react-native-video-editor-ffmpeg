import React, {Component} from 'react';
import {
    Text,
    View,
    AsyncStorage,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import TrimSelector from './Subcomponents/TrimSelector';

class VideoTrimmer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            listOfImages: [],
            heartColor: '',
            isPublic: false,
            originalState: false,
        };
    }

    pickVideos = async () => {





        launchImageLibrary({

            mediaType:"video"

        }, response => {

            console.log("RESPONSE "+JSON.stringify(response));
        })


    }


    componentDidMount() {
        if (this.props.isPublic != null) {
            this.setState({isPublic: this.props.isPublic});
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        this.setState({isPublic: nextProps.isPublic});
    }

    pressAction = () => {
        //console.log("LIKE ACTION");

        this.setState({highLighted: !this.state.highLighted});
    };
    pressRelease = () => {
        //console.log("RELEASE ACTION");

        this.setState({highLighted: this.state.originalState});
    };




    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);

        const styles = {};

        return (
            <View
                style={{

                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>






                <TrimSelector></TrimSelector>




            </View>
        );
    }
}
export default VideoTrimmer;
