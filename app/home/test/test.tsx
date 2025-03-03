import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Easing, TouchableOpacity } from 'react-native';

const TestView = () => {
  const [translateX] = useState(new Animated.Value(0)); // Controla el desplazamiento de la vista principal
  const [squareTranslateX] = useState(new Animated.Value(250)); // Controla el desplazamiento del cuadrado (comienza fuera de la pantalla)
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      // Animación para empujar el contenido principal hacia la izquierda
      Animated.timing(translateX, {
        toValue: -250, // Desplazar hacia la izquierda
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();

      // Animación para mover el cuadrado desde la derecha hacia su posición
      Animated.timing(squareTranslateX, {
        toValue: 0, // El cuadrado llegará al borde derecho de la pantalla
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [isAnimating, translateX, squareTranslateX]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mainView, { transform: [{ translateX }] }]}>
        {/* Esta vista se moverá hacia la izquierda */}
      
      </Animated.View>

      {/* Cuadrado que aparece desde la derecha */}
      <Animated.View style={[styles.square, { transform: [{ translateX: squareTranslateX }] }]} >
        <TouchableOpacity>
          <Text>Cerrar</Text>
        </TouchableOpacity>
        </Animated.View>
      
      {/* Botón para iniciar la animación */}
      <Text
        style={styles.button}
        onPress={() => setIsAnimating(!isAnimating)}
      >
        {isAnimating ? 'Detener animación' : 'Iniciar animación'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    backgroundColor: '#004481',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Para ocultar el contenido que se mueve fuera del límite
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  square: {
    position: 'absolute',
    right: 0,
    width: 250,
    height: '100%',
    backgroundColor: 'tomato',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    color: '#000000',
  },
});

export default TestView;
