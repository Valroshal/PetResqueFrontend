import React from 'react'

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
})


const Login = () => {
    return(
        <View style={styles.container}>
            <Typography>
                {'Hello, we are looking for pets'}
            </Typography>
        </View>
    )
}

export default Login