import { Text, View, Image} from "react-native";
import styles from "./cardStyle";

export default function Card(props) {

  return (
    <>
        <View style={styles.cardProduct}>
          <Image style={styles.imageProduct} source={{ uri: props.imagemUrl }}></Image>

          <View style={styles.containerInfoProduct}>
            <Text style={styles.nameProduct}>{props.nome}</Text>

            <Text style={styles.descriptionProduct}>{props.descricao}</Text>

            <Text style={styles.priceProduct}>R$ {props.preco}</Text>
          </View>
        </View>
    </>
  );
}
