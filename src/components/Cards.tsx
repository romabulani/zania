import { useAppContext } from "../contexts/AppContext";
import { thumbnails } from "../data/thumbnails";
import Image from "./Image";
import Overlay from "./Overlay";

const Cards: React.FC = () => {
  const {
    data,
    draggedIndex,
    setDraggedIndex,
    setData,
    setHasChanges,
    setOverlayImage,
    overlayImage,
  } = useAppContext();

  const onDragStart = (index: number) => setDraggedIndex(index);

  const onDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      const updatedData = [...data];
      const [removed] = updatedData.splice(draggedIndex, 1);
      updatedData.splice(index, 0, removed);
      setData(updatedData);
      setDraggedIndex(index);
      setHasChanges(true);
    }
  };

  const onDragEnd = () => setDraggedIndex(null);

  return (
    <div className="grid">
      {data.length === 0 && <p> Loading Cards ....</p>}
      {data.map((doc, index) => (
        <div
          key={doc.type}
          className="card"
          draggable
          onDragStart={() => onDragStart(index)}
          onDragOver={(e) => onDragOver(e, index)}
          onDragEnd={onDragEnd}
          onClick={() => setOverlayImage(thumbnails[doc.type])}
        >
          <Image doc={doc} />
          <p>{doc.title}</p>
        </div>
      ))}
      {overlayImage && <Overlay />}
    </div>
  );
};

export default Cards;
