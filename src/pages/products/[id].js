import { useRouter } from "next/router";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>ProductDetails... Product id: {id}</div>
    );
}
 
export default ProductDetails;