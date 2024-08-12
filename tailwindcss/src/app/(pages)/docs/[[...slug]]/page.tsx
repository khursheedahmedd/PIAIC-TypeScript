import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 3) {
    return (
      <div>
        Viewing {params.slug[0]} of {params.slug[1]} and {params.slug[2]}
      </div>
    );
  } else if (params.slug?.length === 2) {
    return (
      <div>
        Viewing {params.slug[0]} of {params.slug[1]}
      </div>
    );
  }
  return <div>Docs Home Page</div>;
};

export default Docs;
