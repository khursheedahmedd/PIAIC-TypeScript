import React from "react";

const ReviewDeatils = ({
  params,
}: {
  params: { reviewsId: string; productId: string };
}) => {
  return (
    <div>
      review {params.reviewsId} product {params.productId}
    </div>
  );
};

export default ReviewDeatils;
