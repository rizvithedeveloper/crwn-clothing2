import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {React.Children.toArray(
          items
            .filter((item, idx) => idx < 4)
            .map(({ ...CollectionPreviewProps }) => (
              <CollectionItem {...CollectionPreviewProps} />
            ))
        )}
      </div>
    </div>
  );
};

export default CollectionPreview;
