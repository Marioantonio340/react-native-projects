import React, { useReducer, useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    //const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )
    return <TouchableOpacity 
    onPress={inverterSelecionado}
    style={estilos.cartao}>
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>

    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }

});