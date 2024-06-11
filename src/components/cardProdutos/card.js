import { Text, View, Image, Pressable } from "react-native";
import styles from "./cardStyle";

import { useNavigation } from '@react-navigation/native';

export default function Card(props) {
  const navigation = useNavigation();

  return (
    <>
      <Pressable onPress={() => navigation.navigate('ProdutoIndividual', { idProduto: props.id, idCategoria: props.idCategoria})}>
        <View style={styles.cardProduct}>
          <Image style={styles.imageProduct} source={{ uri: props.imagemUrl }}></Image>

          <View style={styles.containerInfoProduct}>
            <Text style={styles.nameProduct}>{props.nome}</Text>

            <Text style={styles.descriptionProduct}>{props.descricao}</Text>

            <Text style={styles.priceProduct}>R$ {props.preco}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}
