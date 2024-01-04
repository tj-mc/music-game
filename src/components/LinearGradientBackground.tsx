import {LinearGradient} from "expo-linear-gradient";

export const LinearGradientBackground = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#00F2FF', '#FC99F1']}
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
            }}
        />
    )
}
