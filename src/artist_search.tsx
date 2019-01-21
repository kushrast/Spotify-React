import { MenuItem } from "@blueprintjs/core";
import { ItemRenderer } from "@blueprintjs/select";
import React from 'react';

export interface ArtistSearchItem {
    /** Name of Artist. */
    name: string;
    /** Spotify ID. */
    id: string;
}

/** Results from Spotify **/
export const search_results: ArtistSearchItem[] = [
    { name: "Louis the Child", id: "1" },
    { name: "Illenium", id: "2" },
];

export const renderArtist: ItemRenderer<ArtistSearchItem> = (artist, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = '${artist.name}';
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            onClick={handleClick}
            text={text}
        />
    );
};

export const artistSelectProps = {
    itemRenderer: renderArtist
};