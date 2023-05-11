import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

import { carregaProdutores } from "../../../servicos/carregaDados";
import { FlatList } from "react-native";
import Produtor from "./Produtor";

export default function Produtores({ topo: Topo }) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);


    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);



    }, []);


    const topoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }
    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={(nome) => nome}
        ListHeaderComponent={topoLista}
    />
}


const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})