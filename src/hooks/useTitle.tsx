import {useEffect} from "react";

// hook for document.title manipulations
export const useTitle = (newTitle: string): void => {
    useEffect(() => {
        const currentTitle = document.title;

        document.title = newTitle;

        return () => {
            document.title = currentTitle;
        };
    }, []);
}