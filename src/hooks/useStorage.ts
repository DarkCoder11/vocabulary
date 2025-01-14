import { MMKV } from 'react-native-mmkv';
import { useCallback } from 'react';

const storage = new MMKV();

export const useStorage = () => {
    /**
     * Set a value in MMKV storage.
     * Automatically handles stringification for non-string values.
     */
    const setItem = useCallback((key: string, value: any) => {
        if (typeof value === 'string') {
            storage.set(key, value);
        } else {
            storage.set(key, JSON.stringify(value));
        }
    }, []);

    /**
     * Get a value from MMKV storage.
     * Automatically parses JSON values if applicable.
     */
    const getItem = useCallback((key: string) => {
        const value = storage.getString(key);
        try {
            return value ? JSON.parse(value) : null;
        } catch {
            return value; // Return raw value if parsing fails
        }
    }, []);

    /**
     * Delete a value from MMKV storage.
     */
    const deleteItem = useCallback((key: string) => {
        storage.delete(key);
    }, []);

    return {
        setItem,
        getItem,
        deleteItem,
    };
};
