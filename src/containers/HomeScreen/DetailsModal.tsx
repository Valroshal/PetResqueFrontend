import React from "react";
import {Modal, StyleSheet, Text, View, TouchableOpacity, ViewStyle, TextStyle} from "react-native";

interface Props {
    isOpen : boolean;
}
const DetailsModal: React.FC<Props> = ({isOpen}) => {
    // const [isOpen, setModalVisible] = useState(isOpen);


    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={isOpen}
            onRequestClose={() => {}}
        >
            {/*<View style={styles.centeredView}>*/}
                <View style={styles.modalView}>
                    <TouchableOpacity>
                        <Text>
                            Edit Details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Mark as found by owner
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            {/*</View>*/}
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: '#DDDDDD',
        borderWidth: 1 ,
        paddingTop: 19,
        paddingRight: 16,
        alignItems: "flex-end",
        justifyContent: "center",
    } as ViewStyle,
    modalText: {
        // marginBottom: 15,
        textAlign: "left"
    } as TextStyle,
});

export default DetailsModal;