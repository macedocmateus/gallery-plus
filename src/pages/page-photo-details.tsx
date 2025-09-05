import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
    const {id} = useParams()
    
    return (
            <>
                <Text variant="heading-large">
                    Página detalhe da foto
                </Text>
                <hr />
                <Text variant="heading-large">
                    ID da foto:{id}
                </Text>
            </>
        )
}
