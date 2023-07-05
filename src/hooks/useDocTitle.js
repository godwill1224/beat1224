import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Beat1224`;
        } else {
            document.title = 'Beat1224 - The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
