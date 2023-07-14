import React from "react";
import PageTemplate from "../layout/PageTemplate";
import GalleryContent from "../components/gallery/GalleryContent";

export default function GalleryPage() {
  return <PageTemplate content={<GalleryContent />} />;
}
