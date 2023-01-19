import { useRouter } from "next/router";
function Review() {
  const { query } = useRouter();
  const { productId, reviewId } = query;
  return <h1>Review {reviewId} for Product {productId}</h1>;
}

export default Review;
