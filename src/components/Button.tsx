import {Pressable, StyleSheet, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Haptics from 'expo-haptics';
import {useState} from "react";

type Props = {
    text: string;
}

export const Button = ({text}: Props) => {


    const [isPressed, setIsPressed] = useState(false)

    const onPress = () => {
        void Haptics.selectionAsync()
    }

    return (
        <Pressable style={styles.pressable} onPressIn={() => {
            setIsPressed(true)
            onPress()
        }
        }
                   onPressOut={() => setIsPressed(false)}
        >
            <LinearGradient
                // Background Linear Gradient
                colors={['#A0F9FF', '#F99AEF']}
                style={{
                    borderRadius: 32,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                }}
                start={{x: 0, y: 0}}
            />
            {
                isPressed ? (

                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#A0F9FF', '#f9a0ff']}
                        locations={[0.5, 1]}
                        style={{
                            borderRadius: 32,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                        }}
                        start={{x: 0, y: 0}}
                    />
                ) : null
            }
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        paddingVertical: 14,
        shadowColor: "#A0F9FF",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    text: {
        fontSize: 24
    }
})
