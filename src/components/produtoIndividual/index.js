import { Text, View, Image } from "react-native";
import styles from "../produtoIndividual/style";


export default function ProdutoIndividual(props) {
    return (
        <>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: props.imagemUrl }} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.productContainer}>
                    <Text style={styles.productName}>{props.nome}</Text>
                    <Text style={styles.productDescription}>
                        {props.descricao}
                    </Text>
                    <Text style={styles.productPrice}>R${props.preco}</Text>
                </View>
            </View>
        </>
    );
}
