import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { fetchDocuments, saveDocuments } from "../services";
import { IDocument } from "../types";

interface AppContextProps {
  data: IDocument[];
  setData: React.Dispatch<React.SetStateAction<IDocument[]>>;
  draggedIndex: number | null;
  setDraggedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  overlayImage: string | null;
  setOverlayImage: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  timeSinceLastUpdate: number;
  setHasChanges: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IDocument[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const lastSaved = useRef<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [timeSinceLastUpdate, setTimeSinceLastUpdate] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const res = await fetchDocuments();
      setData(res);
    })();
  }, []);

  const saveData = useCallback(async () => {
    if (!hasChanges || loading) return;

    setLoading(true);
    try {
      await saveDocuments(data);
      lastSaved.current = new Date();
      setHasChanges(false);
      setTimeSinceLastUpdate(0);
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false);
    }
  }, [data, hasChanges, loading]);

  useEffect(() => {
    const saveInterval = setInterval(saveData, 5000);
    return () => clearInterval(saveInterval);
  }, [saveData]);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setTimeSinceLastUpdate(
        lastSaved?.current
          ? Math.floor(
              (new Date().getTime() - lastSaved.current.getTime()) / 1000
            )
          : 0
      );
    }, 2000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        draggedIndex,
        setDraggedIndex,
        overlayImage,
        setOverlayImage,
        loading,
        timeSinceLastUpdate,
        setHasChanges,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext) as AppContextProps;
